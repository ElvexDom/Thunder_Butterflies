import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cheval } from '../../models/cheval';
import { ChevalService } from '../../services/cheval.service';
import { RouterModule } from '@angular/router';
// import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-cheval-view',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cheval-view.component.html',
  styleUrl: './cheval-view.component.scss'
})

export class ChevalViewComponent  implements OnInit {
  chevaux = this.chevalService.getChevaux();
  participant: Cheval;
  nbrChevaux:number = this.chevalService.getChevaux().length;
  cheval: Cheval;
  id: number = 0;
  nom: string = '';
  robe: string = '';
  performance: string = '';
  flipette: string = '';
  vitesse_max: number = 0;

  ngOnInit(): void { }

  constructor(private chevalService: ChevalService) {
    this.chevaux = [];
    this.cheval = new Cheval("");
    this.participant =new Cheval("");
  }
  
/**
 * Cette fonction permet de générer un nouvel id
 */
  // genId(): string {
  //   let uuid = uuidv4();
  //   this.chevaux.forEach(cheval => {
  //     if (cheval.id == uuid) {
  //       this.genId()}
  //   });
  //   return uuid;
  // }

  /**
   * Cette fonction permet d'ajouter un cheval à la liste des particpants
   */
  onSubmit() : void {
    // console.log("clicked");
    this.participant = new Cheval(this.cheval.name);
    this.participant.id = this.chevalService.getChevaux().length;
    this.participant.name = this.cheval.name;
    this.participant.robe = this.cheval.robe;
    this.participant.performance = this.cheval.performance;
    this.participant.flipette = this.cheval.flipette;
    this.participant.vitesse_max = this.cheval.vitesse_max;
    this.chevaux.push(this.participant);

    let ListCheval =this.chevalService.addCheval(this.chevaux[this.chevaux.length-1]);
    console.log(this.chevaux[this.chevaux.length-1]);
    if (!ListCheval){
      this.chevaux.pop()
      console.log("la liste est pleine");
    }
    this.nbrChevaux = this.chevalService.getChevaux().length
  }

  // showMe() {
  //   console.log(`${this.cheval?.name} - ${this.cheval.robe ?? ''} - ${this.cheval.vitesse_max ?? ''}`);
  // }

}