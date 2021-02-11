// 問い合わせによる一次変数の置き換え
class OrderReplace {
    [x: string]: any;
    constructor(quantity, item) {
        this._quantity = quantity
        this._item = item
    }

    get price() {
        let discountFactor = 0.98;
        if (this.basePrice > 1000) discountFactor -= 0.03
        return discountFactor
    }

    get basePrice() {
        return this.basePrice * this.discountFactor;
    }
}