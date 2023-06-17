import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDastComponent } from './mobile-dast.component';

describe('MobileDastComponent', () => {
  let component: MobileDastComponent;
  let fixture: ComponentFixture<MobileDastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileDastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileDastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
