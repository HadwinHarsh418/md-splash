import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePsychosocialCommercialComponent } from './mobile-psychosocial-commercial.component';

describe('MobilePsychosocialCommercialComponent', () => {
  let component: MobilePsychosocialCommercialComponent;
  let fixture: ComponentFixture<MobilePsychosocialCommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilePsychosocialCommercialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePsychosocialCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
