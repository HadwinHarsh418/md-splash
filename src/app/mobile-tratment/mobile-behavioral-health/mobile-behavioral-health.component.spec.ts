import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileBehavioralHealthComponent } from './mobile-behavioral-health.component';

describe('MobileBehavioralHealthComponent', () => {
  let component: MobileBehavioralHealthComponent;
  let fixture: ComponentFixture<MobileBehavioralHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileBehavioralHealthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileBehavioralHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
