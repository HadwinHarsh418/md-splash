import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildadolescentdiagnosticComponent } from './childadolescentdiagnostic.component';

describe('ChildadolescentdiagnosticComponent', () => {
  let component: ChildadolescentdiagnosticComponent;
  let fixture: ComponentFixture<ChildadolescentdiagnosticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildadolescentdiagnosticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildadolescentdiagnosticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
