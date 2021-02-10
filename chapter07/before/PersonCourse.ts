// コレクションのカプセル化
export class Person {
    [x: string]: any;
    constructor (name) {
        this._name = name;
        this._courses = [];
    }

    get name() { return this._name }
    get courses() { return this._courses }
    set courses(aList) { this._courses = aList }
}

export class Course {
    [x: string]: any;
    constructor(name, isAdvanced) {
        this._name = name;
        this._isAdvanced = isAdvanced;
    }

    get name() { return this._name }

    get isAdvanced() { return this._isAdvanced }
}