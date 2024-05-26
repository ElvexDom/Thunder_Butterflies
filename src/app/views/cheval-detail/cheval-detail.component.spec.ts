import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChevalDetailComponent } from './cheval-detail.component';

describe('ChevalDetailComponent', () => {
  // Déclaration des variables du composant
  let component: ChevalDetailComponent;
  let fixture: ComponentFixture<ChevalDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    // Injection du composant
      imports: [ChevalDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChevalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // Vérifie si l'instance du composant existe
    expect(component).toBeTruthy();
  });
});
