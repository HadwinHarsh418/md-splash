import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IopAuthFormComponent } from './iop-auth-form.component';

describe('IopAuthFormComponent', () => {
  let component: IopAuthFormComponent;
  let fixture: ComponentFixture<IopAuthFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IopAuthFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IopAuthFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
