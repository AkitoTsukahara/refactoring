// クラスの抽出
class Person {
    [x: string]: any
    get name() { return this._name }
    set name(arg) { this._name = arg }
    get telephoneNumber() { return `(${this.officeCode} ${this.officeNumber}` }
    get officeAreaCode() { return this._officeAreaCode }
    set officeAreeCode(arg) { this._officeAreaCode = arg }
    get officeNumber() { return this._officeNumber }
    set officeNumber(arg) { this._officeNumber = arg } 
}