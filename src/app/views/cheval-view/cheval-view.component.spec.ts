import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChevalViewComponent } from './cheval-view.component';

describe('ChevalViewComponent', () => {
  // Déclaration des variables du composant
  let component: ChevalViewComponent;
  let fixture: ComponentFixture<ChevalViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Injection du composant
      imports: [ChevalViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChevalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // Vérifie si l'instance du composant existe
    expect(component).toBeTruthy();
  });
});
