import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSuicideRiskComponent } from './mobile-suicide-risk.component';

describe('MobileSuicideRiskComponent', () => {
  let component: MobileSuicideRiskComponent;
  let fixture: ComponentFixture<MobileSuicideRiskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileSuicideRiskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileSuicideRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
