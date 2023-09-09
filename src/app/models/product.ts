export class Product {
    constructor(private _name: string, private _price: number, private _description: string, private _expiry?: Date) {}

    public get name(): string {
        return this._name;
    }
    public get price(): number{
        return this._price;
    }
    public get description(): number{
        return this._price;
    }
}
