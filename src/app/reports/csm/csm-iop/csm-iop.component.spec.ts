import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsmIopComponent } from './csm-iop.component';

describe('CsmIopComponent', () => {
  let component: CsmIopComponent;
  let fixture: ComponentFixture<CsmIopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsmIopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsmIopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
