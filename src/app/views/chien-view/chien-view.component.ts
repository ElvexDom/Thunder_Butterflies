import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Chien } from '../../models/chien';
import { AlerteConsoleService } from '../../services/alerte-console.service';

@Component({
  selector: 'app-chien-view',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './chien-view.component.html',
  styleUrl: './chien-view.component.scss'
})
export class ChienViewComponent {
  chien: Chien;
  nameControl: FormControl;
  chienForm: FormGroup;

  constructor(private fb: FormBuilder,  private alertConsole: AlerteConsoleService) {
    this.chien = new Chien("xxx");
    this.nameControl = new FormControl('Dog Name');
    this.chienForm = this.fb.group({
      nom: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.alertConsole.showAlert("aie aie aie !");
  }

  /**
   * Cette fonctionne affiche dans la console:
   * le nom du chien
   * la valeur du formulaire
   * le contrôle du formulaire
   */
  showMe() {
    //On affecte manuellement la valeur de l'input (recuperee dans le formControl) a notre objet metier
    // this.chien.name = this.nameControl.value;
    console.log(`${this.chien.name} - ${this.nameControl.value} - ${this.nameControl.dirty}`);
  }

  /**
   * Cette fonction s'exécute lors de la soumission du formulaire
   */
  onSubmit() {
    this.showMe();
  }
}