export default class {
    /**
     * 事件 callback 集合
     */
    callbackSet = {};

    /**
     * @param {Array} events 传入一个事件名称数组，用于初始化支持的事件
     */
    constructor(events) {
        events.forEach(type => this.callbackSet[type] = []);
    }

    /**
     * 执行指定事件类型的 callback
     * 并将第二个参数及之后参数传递给 callback
     * @param {String} type 事件类型
     */
    emit(type, ...args) {
        this.callbackSet[type].concat().forEach(cb => cb(...args));
    }

    /**
     * 注册事件监听
     * @param   {String}             type      事件类型。
     * @param   {Function}           callback  事件监听函数。
     * @returns {Function|Undefined}           如果注册成功，则返回一个反注册函数，调用它可以取消监听。
     */
    on(type, callback) {
        if (!this.callbackSet[type]) return;

        let cbArr = this.callbackSet[type];

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
     * 移除事件监听
     * @param  {String}   type     可选。事件类型。
     *                             如果传入一个 Function，则会被当做事件监听函数来处理。
     * @param  {Function} callback 可选。事件监听函数。
     */
    off(type, callback) {
        const typeStr = typeof type;
        let cbSet;

        if (typeStr === 'undefined') {
            for (let cbArr of Object.values(this.callbackSet)) {
                cbArr.length = 0;
            }
            return;

        } else if (typeStr === 'function') {
            callback = type;
            cbSet = this.callbackSet;

        } else if (typeStr === 'string') {
            if (this.callbackSet[type]) {
                cbSet = {
                    [type]: this.callbackSet[type]
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
