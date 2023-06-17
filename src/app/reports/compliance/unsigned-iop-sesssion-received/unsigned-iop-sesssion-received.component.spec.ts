import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsignedIopSesssionReceivedComponent } from './unsigned-iop-sesssion-received.component';

describe('UnsignedIopSesssionReceivedComponent', () => {
  let component: UnsignedIopSesssionReceivedComponent;
  let fixture: ComponentFixture<UnsignedIopSesssionReceivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsignedIopSesssionReceivedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsignedIopSesssionReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
