import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomaticComponent } from './somatic.component';

describe('SomaticComponent', () => {
  let component: SomaticComponent;
  let fixture: ComponentFixture<SomaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomaticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SomaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
