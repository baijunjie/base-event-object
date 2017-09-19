export default class {

    _callbackSet = {}; // Event callback set

    /**
     * @param events {Array} Pass in an array of event names for initializing the supported events
     */
    constructor(events) {
        if (Object.prototype.toString.call(events) === '[object Array]') {
            if (events.length) {
                events.forEach(type => this._callbackSet[type] = []);
            } else {
                console.warn('Arguments is empty array, this instance cannot support any event!');
            }
        } else {
            throw new Error('Arguments is not a array');
        }
    }

    /**
     * Performs the callback of the specified event type
     * And pass the second parameter and subsequent parameters to callback
     * @param type {String} Event type
     */
    emit(type, ...args) {
        this._callbackSet[type].concat().forEach(cb => cb(...args));
    }

    /**
     * Registration event listener
     * @param   type     {String}    Event type
     * @param   callback {Function}  Event listener handle
     * @returns {Function|Undefined} If the registration is successful, an anti-registration function is returned, which can be called to cancel the listener.
     */
    on(type, callback) {
        if (!this._callbackSet[type]) return;

        let cbArr = this._callbackSet[type];

        if (typeof callback === 'function' && cbArr.indexOf(callback) < 0) {
            cbArr.push(callback);
        }

        return function() {
            let index = cbArr.indexOf(callback);
            if (index >= 0) {
                cbArr.splice(index, 1);
            }
        };
    }

    /**
     * Remove event listener
     * @param type     {String}   Optional. Event type.
     *                            If a Function is passed in, it is treated as an event listener Function.
     * @param callback {Function} Optional. Event listener handle.
     */
    off(type, callback) {
        const typeStr = typeof type;
        let cbSet;

        if (typeStr === 'undefined') {
            for (let cbArr of Object.values(this._callbackSet)) {
                cbArr.length = 0;
            }
            return;

        } else if (typeStr === 'function') {
            callback = type;
            cbSet = this._callbackSet;

        } else if (typeStr === 'string') {
            if (this._callbackSet[type]) {
                cbSet = {
                    [type]: this._callbackSet[type]
                };
            } else {
                return;
            }

            if (callback === undefined) {
                cbSet[type].length = 0;
                return;
            }
        } else {
            return;
        }

        let index;
        for (let cbArr of Object.values(cbSet)) {
            index = cbArr.indexOf(callback);
            if (index >= 0) {
                cbArr.splice(index, 1);
            }
        }
    }
}
