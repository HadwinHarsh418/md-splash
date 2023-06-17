import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PRPCOLLABORATIONNOTEComponent } from './prpcollaborationnote.component';

describe('PRPCOLLABORATIONNOTEComponent', () => {
  let component: PRPCOLLABORATIONNOTEComponent;
  let fixture: ComponentFixture<PRPCOLLABORATIONNOTEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PRPCOLLABORATIONNOTEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PRPCOLLABORATIONNOTEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
