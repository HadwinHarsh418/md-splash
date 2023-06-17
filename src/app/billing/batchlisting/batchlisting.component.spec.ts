import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchlistingComponent } from './batchlisting.component';

describe('BatchlistingComponent', () => {
  let component: BatchlistingComponent;
  let fixture: ComponentFixture<BatchlistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchlistingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
