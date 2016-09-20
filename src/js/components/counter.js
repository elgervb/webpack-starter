/**
 * Simple counter class
 */
export default class Counter {
    constructor(count = 0) {
        this._count = count;
    }

    count() {
        return this._count;
    }

    decrease() {
        return this._count > 0 ? --this._count : this._count;
    }

    increase() {
        return ++this._count;
    }

}
