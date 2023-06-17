import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CageAidComponent } from './cage-aid.component';

describe('CageAidComponent', () => {
  let component: CageAidComponent;
  let fixture: ComponentFixture<CageAidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CageAidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CageAidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
