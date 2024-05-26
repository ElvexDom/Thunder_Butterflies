import { TestBed } from '@angular/core/testing';

import { AlerteConsoleService } from './alerte-console.service';

// Description de la classe AlerteConsoleService
describe('AlerteConsoleService', () => {
  // Déclaration de la variable du service
  let service: AlerteConsoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    // Injection du service
    service = TestBed.inject(AlerteConsoleService);
  });

  it('should be created', () => {
    // Vérifie si l'instance du service existe
    expect(service).toBeTruthy();
  });
});
