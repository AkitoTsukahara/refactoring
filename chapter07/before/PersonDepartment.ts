// 委譲の隠蔽
export class Person {
    [x: string]: any
    constructor(name) {
        this._name = name
    }

    get name() { return this._name }
    get department() { return this._department }
    set department(arg) { this._department = arg }
 }

 export class Department {
    [x: string]: any
     get chargeCode() { return this._chargeCode }
     set chargeCode(arg) { this._chargeCode = arg }
     get manager() { return this._manager }
     set manager(arg) { this._manager = arg }
 }