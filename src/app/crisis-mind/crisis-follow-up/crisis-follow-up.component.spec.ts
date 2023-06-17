import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrisisFollowUpComponent } from './crisis-follow-up.component';

describe('CrisisFollowUpComponent', () => {
  let component: CrisisFollowUpComponent;
  let fixture: ComponentFixture<CrisisFollowUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrisisFollowUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrisisFollowUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
