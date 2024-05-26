import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChienViewComponent } from './chien-view.component';

describe('ChienViewComponent', () => {
  // Déclaration des variables du composant
  let component: ChienViewComponent;
  let fixture: ComponentFixture<ChienViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Injection du composant
      imports: [ChienViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChienViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // Vérifie si l'instance du composant existe
    expect(component).toBeTruthy();
  });
});
