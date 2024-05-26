import { TestBed } from '@angular/core/testing';

import { ChevalService } from './cheval.service';
import { Cheval } from '../models/cheval';

// Description de la classe ChevalService
describe('ChevalService', () => {
  let service: ChevalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChevalService);
  });

  it('should be created', () => {
    // Vérifie si le service a été créé
    expect(service).toBeTruthy();
  });

  it('test ajout cheval', () => {
    // Ajoute 1 nouveau cheval au service
    let cheval = new Cheval("Johnny");
    service.addCheval(cheval);
    // Vérifie que la liste de chevaux contient maintenant 1 élément
    expect(service.getChevaux().length).toEqual(1);
  });

  it('test retrait cheval', () => {
    // Ajoute 5 nouveaux chevaux au service
    for (let i = 0; i < 5; i++) {
      let cheval = new Cheval("Johnny");
      service.addCheval(cheval);
    }
    // Supprime un cheval de façon aléatoire
    service.removeChevaById(Math.floor(Math.random() * 5));
    // Vérifie que la liste de chevaux contient maintenant 4 éléments
    expect(service.getChevaux().length).toEqual(4);
  });

  it('test suppression liste', () => {
    // Ajoute le nombre maximum de chevaux au service
    for (let i = 0; i < service.maxCheval(); i++) {
      let cheval = new Cheval("Johnny");
      service.addCheval(cheval);
    }
    // Supprime tous les chevaux
    service.clearChevaux();
    // Vérifie que la liste de chevaux est maintenant vide

    expect(service.getChevaux().length).toEqual(0);
  });

  it('test liste max', function () {
    // Espionne la fonction console.log
    spyOn(console, "log").and.callThrough();
    // Ajoute plus de chevaux au service que la limite autorisée
    for (let i = 0; i < service.maxCheval() + 1; i++) {
      let cheval = new Cheval("Johnny");
      service.addCheval(cheval);
    }
    // Vérifie que le message "la liste est pleine" a été affiché
    expect(console.log).toHaveBeenCalledWith("la liste est pleine");
  });

});