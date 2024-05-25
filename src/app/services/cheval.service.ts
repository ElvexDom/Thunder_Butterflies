import { Injectable } from '@angular/core';
import { Cheval } from '../models/cheval';

@Injectable({
  providedIn: 'root'
})
export class ChevalService {

  private listChevaux: Cheval[] = [];

  constructor() { };
  /**
   * Taille maximale de la liste des chevaux
   */
  private MAX_CHEVAUX = 10;
  /**
   * 
   * @returns 
   * Cette fonction retourne la taille maximale de la liste des chevaux
   */
  public maxCheval(): number {
    return this.MAX_CHEVAUX;
  };

  /**
   * 
   * @param cheval 
   * Cette fonction ajoute un cheval à la liste des chevaux
   */
  public addCheval(cheval: Cheval): boolean {
    if (this.listChevaux.length < this.MAX_CHEVAUX) {
      this.listChevaux.push(cheval);
      return true;
    }
    else {
      return false;
    }
  };

  /**
   * 
   * @param id 
   * Cette fonction supprime un cheval de la liste des chevaux
   */
  public removeChevaById(id: number) : void{
    for (let i = 0; i < this.listChevaux.length; i++) {
      if (this.listChevaux[i].id === id) {
        this.listChevaux.splice(i, 1);
      }
    }
  };

  /**
   * Cette fonction vide la liste des chevaux
   */
  public clearChevaux() {
    this.listChevaux = [];
  };

  /**
   * 
   * @returns 
   * Cette fonction retourne la liste des chevaux
   */
  public getChevaux(): Cheval[] {
    return this.listChevaux;
  };

  /**
   * 
   * @param id 
   * Cette fonction retourne un cheval à partir de son id
   * @returns 
   */
  public getChevalById(id: number): Cheval | undefined {
    for (let i = 0; i < this.listChevaux.length; i++) {
      if (this.listChevaux[i].id === id) {
        return this.listChevaux[i];
      }
    }
    return undefined
  };
}