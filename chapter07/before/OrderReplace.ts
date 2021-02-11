// 問い合わせによる一次変数の置き換え
class OrderReplace {
    [x: string]: any;
    constructor(quantity, item) {
        this._quantity = quantity
        this._item = item
    }

    get price() {
        let basePrice = this._quantity * this._item.price
        let discountFactor = 0.98;
        if (basePrice > 1000) discountFactor -= 0.03
        return discountFactor
    }
}