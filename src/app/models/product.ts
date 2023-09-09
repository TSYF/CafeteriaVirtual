export class Product {
    constructor(private _id?: number, private _name?: string, private _price?: number, private _description?: string, private _expiry?: Date) {}

    public get name(): string | undefined {
        return this._name;
    }
    public get price(): number | undefined {
        return this._price;
    }
    public get description(): string | undefined {
        return this._description;
    }
    public get id(): number | undefined {
        return this._id;
    }
}
