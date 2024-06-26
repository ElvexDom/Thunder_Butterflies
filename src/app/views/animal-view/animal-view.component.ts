import { Component, OnInit } from '@angular/core';
import { Cheval } from '../../models/cheval';
import { ChevalService } from '../../services/cheval.service';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-animal-view',
  standalone: true,
  imports: [RouterModule, DatePipe],
  templateUrl: './animal-view.component.html',
  styleUrl: './animal-view.component.scss'
})

export class AnimalViewComponent implements OnInit {
  progressCourse = false; // Indique si la course est en cours
  line = 450; // Position de la ligne d’arrivée.
  runner: Cheval[]; // Tableau des chevaux
  race: Cheval[] = []; // Tableau de la course
  rank: Cheval[] = []; // Tableau du classement
  finishPosition = 0; // Status du cheval
  timerId: any = 0; // Timer
  today: Date = new Date(); // Date

  constructor(private chevalService: ChevalService) {
    this.runner = [];
  }

  ngOnInit(): void {
    this.initHorses();
  }

/**
 * Initialise la liste des participants à partir de ChevalService
 */
  initHorses() {
    for (let i = 0; i < this.chevalService.getChevaux().length; i++) {
      this.runner[i] = this.chevalService.getChevaux()[i];
      }
    }

  /**
   * Cette fonction vérifie si un autre cheval est à proximité
   * @param horseNearby 
   * @returns 
   */
  proximity_Horse(horseNearby: Cheval): boolean {
    for (let i = 0; i < this.runner.length; i++) {
      if (this.runner[i] !== horseNearby && this.runner[i].get_statuspos() === "runner" && Math.abs(horseNearby.getPos() - this.runner[i].getPos()) < 100) {
        return true;
      }
    }
    return false;
  }

  /**
   * Cette fonction vérifie que le cheval est autorisé à courir
   * @param horseAutorized 
   * @returns 
   */
  authorize_Horse(horseAutorized: Cheval): boolean {
    return !(horseAutorized === this.race[this.race.length - 1]);
  }

  /**
   * Cette fonction sélectionne un cheval de manière aléatoire
   * @returns 
   */
  select_Horse(): Cheval | undefined {
    let horse = this.runner[Math.floor(Math.random() * this.runner.length)];
    if (this.authorize_Horse(horse)) {
      return horse;
    }
    return undefined;
  }

 /**
   * Cette fonction fait courir le cheval choisi
   * @param horseSelected 
   */
 run_Horse(horseSelected: Cheval | undefined): void {
  if (horseSelected !== undefined) {
    let proximity = this.proximity_Horse(horseSelected);
    horseSelected.runHorse(proximity, this.line);
    this.race.push(horseSelected);
  }
}

  /**
   * Efface la liste des chevaux
   */
  clearList(): void {
    this.runner = [];
    this.chevalService.clearChevaux();
  }

  /**
   * Cette fonction vérifie si un cheval a franchi la ligne d’arrivée
   * @param horseSelected 
   */
  verif_Line(horseSelected: Cheval | undefined): void {
    if (horseSelected !== undefined) {
      if (horseSelected.finishLine(this.line) && horseSelected.get_statuspos() === "run") {
        this.finishPosition++;
        horseSelected.set_statuspos(this.finishPosition.toString());
        this.rank.push(horseSelected);
      }
    }
  }

  /**
   * Cette fonction Contrôle que la course soit terminée
   */
  verif_End() {
    if (this.runner.length === this.rank.length) {
      setTimeout(() => { clearInterval(this.timerId); this.progressCourse = false; });
      for (let i = 0; i < this.runner.length; i++) {
        console.log(`${this.rank[i].name} finit la course en position ${i + 1}`);
      }
    }
  }

/**
 * Cette fonction contrôle que la course peut être lancée
 * @returns 
 */
validCourse() : boolean {
  if (this.chevalService.getChevaux().length < 2 || this.progressCourse) {
    return true
  }
  return false;}

/**
 * Cette fonction initialise la course à son début
 */
  initCourse(){
    for (let i = 0; i < this.runner.length; i++) {
      this.runner[i].set_statuspos("run");
      this.runner[i].initPos();
      this.race = [];
      this.rank  = [];
      this.finishPosition = 0;
      this.timerId = 0
    }
  }

    /**
   * Cette fonction est la fonction principale
   * Elle fait courir les chevaux tant qu'ils n’ont pas franchi la ligne d’arrivée
   */
  runCourse() {
    this.progressCourse = true;
    this.initCourse()
    this.timerId = setInterval(() => {
      let horseSelected = this.select_Horse();
      this.run_Horse(horseSelected);
      console.log("run");
      this.verif_Line(horseSelected);
      this.verif_End()
    }, 10);
  }
}