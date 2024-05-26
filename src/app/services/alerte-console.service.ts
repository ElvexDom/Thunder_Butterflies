import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlerteConsoleService {

  constructor() { }

 
/**
 * Affiche un message d'alerte dans la console
 */
  showAlert(rAlertMsg: string) {
    console.log(rAlertMsg);
  }
}
