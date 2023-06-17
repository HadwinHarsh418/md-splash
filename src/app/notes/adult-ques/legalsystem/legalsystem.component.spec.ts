import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalsystemComponent } from './legalsystem.component';

describe('LegalsystemComponent', () => {
  let component: LegalsystemComponent;
  let fixture: ComponentFixture<LegalsystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalsystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalsystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
