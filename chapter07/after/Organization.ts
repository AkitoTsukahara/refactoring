// レコードのカプセル化
class Organization {
    [x: string]: any;
    constructor(data) {
        this._name = data.name;
        this._country = data.country;
    }

    get name() {
        return this._name;
    }

    get country() {
        return this._country;
    }

    set name(aString) {
        this._name = aString;
    }

    set country(value) {
        this._country = value;
    }

}

export const organization = new Organization({name: "Acme Gooseberries", country: "GB"});
export function getOrganization() {
    return organization;
}