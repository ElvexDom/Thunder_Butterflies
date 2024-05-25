import { Cheval } from './cheval';

describe("Test classe Cheval", function () {
    it("test le nom du cheval", function () {
        const monCheval: Cheval = new Cheval("Bellatrix");
        expect(monCheval.name).toBe("Bellatrix");
    });

    it("test la course du cheval", function () {
        const monCheval: Cheval = new Cheval("Bellatrix");
        let mapos = monCheval.getPos(); //recup position
        monCheval.runHorse(false,100); //fait courir 100m

        //position doit etre differente de avant courir
        expect(monCheval.getPos()).not.toEqual(mapos); 
    });

});