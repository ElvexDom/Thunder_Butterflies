import { TestBed } from '@angular/core/testing';

import { ChevalService } from './cheval.service';
import { Cheval } from '../models/cheval';

describe('ChevalService', () => {
  let service: ChevalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChevalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test ajout cheval', () => {
    let cheval = new Cheval("Johnny");
    service.addCheval(cheval);
    expect(service.getChevaux().length).toEqual(1);
  });

  it('test retrait cheval', () => {
    for (let i = 0; i < 5; i++) {
      let cheval = new Cheval("Johnny");
      service.addCheval(cheval);
    }
    service.removeChevaById(Math.floor(Math.random() * 5));
    expect(service.getChevaux().length).toEqual(4);
  });

  it('test suppression liste', () => {
    for (let i = 0; i < service.maxCheval(); i++) {
      let cheval = new Cheval("Johnny");
      service.addCheval(cheval);
    }
    service.clearChevaux();
    expect(service.getChevaux().length).toEqual(0);
  });

  it('test liste max', function () {
    spyOn(console, "log").and.callThrough();
    for (let i = 0; i < service.maxCheval() + 1; i++) {
      let cheval = new Cheval("Johnny");
      service.addCheval(cheval);
    }
    expect(console.log).toHaveBeenCalledWith("la liste est pleine");
  });

});