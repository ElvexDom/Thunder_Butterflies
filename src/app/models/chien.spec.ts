import { Chien } from './chien';

describe('Chien', () => {
  it('should create an instance', () => {
    // Vérifie si une instance de Chien peut être créée avec le nom "Nemo"

    expect(new Chien("Nemo")).toBeTruthy();
  });

  it('test recuperation nom de chien', () => {
    // Vérifie si le nom du chien créé correspond au nom "Nemo"
    const dogName = "Nemo";
    const myDog = new Chien(dogName);
    expect(myDog.name).toBeDefined();
    expect(myDog.name).not.toBeNull();
    expect(myDog.name).toBe(dogName);
  });

});