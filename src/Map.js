export default class {
    constructor() {
        this._value = [];
    }

    has(obj) {
        return this._value.some(item => item[0] === obj);
    }

    set(obj, value) {
        if (!this._value.some(item => {
            if (item[0] === obj) {
                item[1] = value;
                return true;
            }
        })) {
            this._value.push([obj, value]);
        }
        return this;
    }

    get(obj) {
        let value;
        this._value.some(item => {
            if (item[0] === obj) {
                value = item[1];
                return true;
            }
        });
        return value;
    }

    delete(obj) {
        this._value.some((item, index) => {
            if (item[0] === obj) {
                this._value.splice(index, 1);
                return true;
            }
        });
        return this;
    }
};
