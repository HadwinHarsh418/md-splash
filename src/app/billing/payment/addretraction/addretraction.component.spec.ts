import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddretractionComponent } from './addretraction.component';

describe('AddretractionComponent', () => {
  let component: AddretractionComponent;
  let fixture: ComponentFixture<AddretractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddretractionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddretractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
