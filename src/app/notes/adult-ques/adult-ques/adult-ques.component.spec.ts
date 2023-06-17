import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultQuesComponent } from './adult-ques.component';

describe('AdultQuesComponent', () => {
  let component: AdultQuesComponent;
  let fixture: ComponentFixture<AdultQuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdultQuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdultQuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
