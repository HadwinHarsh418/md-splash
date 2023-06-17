import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentSupportComponent } from './current-support.component';

describe('CurrentSupportComponent', () => {
  let component: CurrentSupportComponent;
  let fixture: ComponentFixture<CurrentSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentSupportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
