// クラスのインライン化
class TrackingInformation {
    [x: string]: any
    get shippingCompany() { return this._shippingCompany }
    set shippingCompany(arg) { this._shippingCompany = arg }
    get trackingNumber() { return this._trackingNumber }
    set trackingNumber(arg) { this._shippingCompany = arg }
    get display() { return `${this._shippingCompany} ${this._trackingCompany}` }
}

class Shipment {
    [x: string]: any
    get trackingInfo() {
        return this._trackingInformation.display
    }

    get trackingInformation() { return this._trackingInformation}
    set trackingInformation(aTrackingInformation) { this._trackingInformation = aTrackingInformation }
}