// クラスのインライン化
export class Shipment {
    [x: string]: any
    constructor(trackingNumber, shippingCompany) {
        this._trackingNumber = trackingNumber;
        this._shippingCompany = shippingCompany;
    }

    get shippingCompany() {
        return this._shippingCompany;
    }

    set shippingCompany(arg) {
        this._shippingCompany = arg;
    }

    get trackingNumber() {
        return this._trackingNumber;
    }

    set trackingNumber(arg) {
        this._trackingNumber = arg;
    }

    get trackingInfo() {
        return `${this._shippingCompany}: ${this._trackingNumber}`;
    }
}