import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxdxSummaryComponent } from './rxdx-summary.component';

describe('RxdxSummaryComponent', () => {
  let component: RxdxSummaryComponent;
  let fixture: ComponentFixture<RxdxSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxdxSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxdxSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
