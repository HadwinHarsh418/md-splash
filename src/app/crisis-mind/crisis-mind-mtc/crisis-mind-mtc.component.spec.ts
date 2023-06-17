import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrisisMindMtcComponent } from './crisis-mind-mtc.component';

describe('CrisisMindMtcComponent', () => {
  let component: CrisisMindMtcComponent;
  let fixture: ComponentFixture<CrisisMindMtcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrisisMindMtcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrisisMindMtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
