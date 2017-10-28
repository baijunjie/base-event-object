export default class {
    constructor() {
        this._value = [];
    }

    has(key) {
        return this._value.some(item => item.key === key);
    }

    set(key, value) {
        if (!this._value.some(item => {
            if (item.key === key) {
                item.value = value;
                return true;
            }
        })) {
            this._value.push({ key, value });
        }
        return this;
    }

    get(key) {
        let value;
        this._value.some(item => {
            if (item.key === key) {
                value = item.value;
                return true;
            }
        });
        return value;
    }

    delete(key) {
        this._value.some((item, index) => {
            if (item.key === key) {
                this._value.splice(index, 1);
                return true;
            }
        });
        return this;
    }
};
