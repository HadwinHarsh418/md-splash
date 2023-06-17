import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsignedSesssionReceivedComponent } from './unsigned-sesssion-received.component';

describe('UnsignedSesssionReceivedComponent', () => {
  let component: UnsignedSesssionReceivedComponent;
  let fixture: ComponentFixture<UnsignedSesssionReceivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsignedSesssionReceivedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsignedSesssionReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
