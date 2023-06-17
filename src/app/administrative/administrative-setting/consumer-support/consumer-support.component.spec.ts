import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerSupportComponent } from './consumer-support.component';

describe('ConsumerSupportComponent', () => {
  let component: ConsumerSupportComponent;
  let fixture: ComponentFixture<ConsumerSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumerSupportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
