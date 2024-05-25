import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChevalDetailComponent } from './cheval-detail.component';

describe('ChevalDetailComponent', () => {
  let component: ChevalDetailComponent;
  let fixture: ComponentFixture<ChevalDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChevalDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChevalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
