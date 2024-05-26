import { Cheval } from './cheval';

describe("Test classe Cheval", function () {
    it("test le nom du cheval", function () {
        const monCheval: Cheval = new Cheval("Bellatrix");
        // Vérifie si le nom du cheval correspond à "Bellatrix"
        expect(monCheval.name).toBe("Bellatrix");
    });

    it("test la course du cheval", function () {
        const monCheval: Cheval = new Cheval("Bellatrix");
        // Récupère la position actuelle du cheval
        let mapos = monCheval.getPos();
        // Fait courir le cheval sur 100 mètres
        monCheval.runHorse(false,100);

        // Vérifie si la position du cheval a changé après la course
        expect(monCheval.getPos()).not.toEqual(mapos);
    });

});