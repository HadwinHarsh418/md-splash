import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralcomponentComponent } from './generalcomponent.component';

describe('GeneralcomponentComponent', () => {
  let component: GeneralcomponentComponent;
  let fixture: ComponentFixture<GeneralcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
