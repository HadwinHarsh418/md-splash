import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseClosureComponent } from './case-closure.component';

describe('CaseClosureComponent', () => {
  let component: CaseClosureComponent;
  let fixture: ComponentFixture<CaseClosureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseClosureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseClosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
