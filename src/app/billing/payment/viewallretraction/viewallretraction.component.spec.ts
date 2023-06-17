import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallretractionComponent } from './viewallretraction.component';

describe('ViewallretractionComponent', () => {
  let component: ViewallretractionComponent;
  let fixture: ComponentFixture<ViewallretractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallretractionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallretractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
