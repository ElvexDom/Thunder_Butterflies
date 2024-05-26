import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalViewComponent } from './animal-view.component';

describe('AnimalViewComponent', () => {
  // Déclaration des variables du composant
  let component: AnimalViewComponent;
  let fixture: ComponentFixture<AnimalViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    // Injection du composant
      imports: [AnimalViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // Vérifie si l'instance du composant existe
    expect(component).toBeTruthy();
  });
});
