import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IopSessionReceivedComponent } from './iop-session-received.component';

describe('IopSessionReceivedComponent', () => {
  let component: IopSessionReceivedComponent;
  let fixture: ComponentFixture<IopSessionReceivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IopSessionReceivedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IopSessionReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
