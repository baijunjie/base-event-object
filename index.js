export default class {
    /**
     * @param events {String|Array|Object} Single event name, or event name array, or event option.
     * If it is an event option, it contains two optional attributes:
     * - events     : Pass in an array of event names for initializing the supported events.
     * - onceEvents : Pass in an array of event names for initializing the supported once events.
     */
    constructor(events) {
        Object.defineProperties(this, {
            _onceEvents: {
                value: {},
                enumerable: false
            },
            _callbackMap: {
                value: {},
                enumerable: false
            },
            _onceCallbackMap: {
                value: {},
                enumerable: false
            },
            once: {
                value: this.once.bind(this),
                enumerable: true
            },
            on: {
                value: this.on.bind(this),
                enumerable: true
            },
            off: {
                value: this.off.bind(this),
                enumerable: true
            },
            emit: {
                value: this.emit.bind(this),
                enumerable: true
            }
        });

        let options;

        if (typeof events === 'string') {
            options = { events: events.split(' ') };
        } else if (isArray(events)) {
            options = { events: events };
        } else if (typeof events === 'object') {
            options = events;
        } else {
            throw new Error('Invalid parameter.');
        }

        if (typeof options.events === 'string') {
            options.events = [options.events];
        }

        if (isArray(options.events) && options.events.length) {
            options.events.forEach(type => {
                this._callbackMap[type] = [];
                this._onceCallbackMap[type] = new Map();
            });
        } else {
            throw new Error('Invalid parameter.');
        }

        if (typeof options.onceEvents === 'string') {
            options.onceEvents = options.onceEvents.split(' ');
        }

        if (isArray(options.onceEvents)) {
            options.onceEvents.forEach(type => {
                this._onceEvents[type] = null;
                this._callbackMap[type] = [];
                this._onceCallbackMap[type] = new Map();
            });
        }
    }

    /**
     * Registration event listener.
     * @param   type     {String}    Event type.
     * @param   callback {Function}  Event listener handle.
     * @param   once     {Boolean}   Whether the event is executed only once.
     * @returns {Function|Undefined} If the registration is successful, an anti-registration function is returned, which can be called to cancel the listener.
     */
    on(type, callback, once) {
        if (typeof type !== 'string') {
            throw new Error('The event type must be a string.');
        }

        const removeArr = [];

        type.split(' ').forEach(type => {
            const remove = on.call(this, type, callback);
            if (!remove) return;
            removeArr.push(remove);
            once && this._onceCallbackMap[type].set(callback, remove);
        });

        return function() {
            removeArr.forEach(remove => remove());
        };
    }

    /**
     * Registration event listener.
     * But this handler will only be executed once.
     * @param   type     {String}    Event type.
     * @param   callback {Function}  Event listener handle.
     * @returns {Function|Undefined} If the registration is successful, an anti-registration function is returned, which can be called to cancel the listener.
     */
    once(type, callback) {
        this.on(type, callback, true);
    }

    /**
     * Remove event listener.
     * @param type     {String}   Optional. Event type.
     *                            If a Function is passed in, it is treated as an event listener Function.
     * @param callback {Function} Optional. Event listener handle.
     */
    off(type, callback) {
        if (typeof type === 'string') {
            type.split(' ').forEach(type => {
                off.call(this, type, callback);
            });
        } else {
            off.call(this, type, callback);
        }
    }

    /**
     * Performs the callback of the specified event type.
     * And pass the second parameter and subsequent parameters to callback.
     * @param type {String} Event type.
     * @param args {*}      Event parameters.
     */
    emit(type, ...args) {
        if (!this._callbackMap[type]) {
            throw new Error(`Event type "${type}" does not exist.`);
        }

        const callbackArray = this._callbackMap[type].concat();

        if (this._onceEvents[type] === null) {
            this._onceEvents[type] = args;
            this._callbackMap[type].length = 0;
        }

        const onceCallbackMap = this._onceCallbackMap[type];

        callbackArray.forEach(cb => {
            cb.call(this, { type }, ...args);
            if (onceCallbackMap.has(cb)) {
                onceCallbackMap.get(cb)();
                onceCallbackMap.delete(cb);
            }
        });
    }
}

function on(type, callback) {
    if (!this._callbackMap[type]) {
        throw new Error(`Event type "${type}" does not exist.`);
    }

    if (typeof callback !== 'function') {
        throw new Error('Missing event handler.');
    }

    if (this._onceEvents[type]) {
        callback.call(this, { type }, ...this._onceEvents[type]);
        return;
    }

    const callbackArray = this._callbackMap[type];

    if (callbackArray.indexOf(callback) < 0) {
        callbackArray.push(callback);
    }

    return function() {
        let index = callbackArray.indexOf(callback);
        if (index >= 0) {
            callbackArray.splice(index, 1);
        }
    };
}

function off(type, callback) {
    const typeStr = typeof type;
    let callbackMap;

    if (typeStr === 'undefined') {
        for (let callbackArray of Object.values(this._callbackMap)) {
            callbackArray.length = 0;
        }
        return;

    } else if (typeStr === 'function') {
        callback = type;
        callbackMap = this._callbackMap;

    } else if (typeStr === 'string') {
        if (this._callbackMap[type]) {
            callbackMap = {
                [type]: this._callbackMap[type]
            };
        } else {
            return;
        }

        if (callback === undefined) {
            callbackMap[type].length = 0;
            return;
        }
    } else {
        return;
    }

    let index;
    for (let callbackArray of Object.values(callbackMap)) {
        index = callbackArray.indexOf(callback);
        if (index >= 0) {
            callbackArray.splice(index, 1);
        }
    }
}

function isArray(arr) {
    return Object.prototype.toString.call(arr) === '[object Array]';
}
