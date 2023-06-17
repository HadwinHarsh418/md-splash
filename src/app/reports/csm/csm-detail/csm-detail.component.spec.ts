import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsmDetailComponent } from './csm-detail.component';

describe('CsmDetailComponent', () => {
  let component: CsmDetailComponent;
  let fixture: ComponentFixture<CsmDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsmDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsmDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
