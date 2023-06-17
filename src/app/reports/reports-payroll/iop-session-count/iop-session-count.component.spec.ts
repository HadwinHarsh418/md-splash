import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IopSessionCountComponent } from './iop-session-count.component';

describe('IopSessionCountComponent', () => {
  let component: IopSessionCountComponent;
  let fixture: ComponentFixture<IopSessionCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IopSessionCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IopSessionCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
