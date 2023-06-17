import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentSupportsComponent } from './current-supports.component';

describe('CurrentSupportsComponent', () => {
  let component: CurrentSupportsComponent;
  let fixture: ComponentFixture<CurrentSupportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentSupportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentSupportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
