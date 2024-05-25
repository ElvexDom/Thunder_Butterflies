export abstract class Animal {
    protected _name: string;

    public constructor(rname: string) {
        this._name = rname;
    }

    public get name(): string {
        return this._name;
    }

    public set name(rNewName: string) {
        this._name = rNewName;
    }
}