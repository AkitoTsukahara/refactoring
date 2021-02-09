// 関数宣言の変更
class Book {
    addReservation(customer, isPriority) {
        console.assert(isPriority === true || isPriority === false);
        this.zz_addReservation(customer)
    }

    zz_addReservation(customer) {
        return this._reservations.push(customer);
    }
}