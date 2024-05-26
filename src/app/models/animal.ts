// La classe Animal
export abstract class Animal {
    protected _name: string; // Le nom de l'animal

    public constructor(rname: string) {
        this._name = rname; // Initialise le nom de l'animal
    }

    public get name(): string {
        return this._name; // Renvoie le nom de l'animal
    }

    public set name(rNewName: string) {
        this._name = rNewName; // Modifie le nom de l'animal
    }
}