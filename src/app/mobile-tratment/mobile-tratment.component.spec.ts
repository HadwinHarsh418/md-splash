import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileTratmentComponent } from './mobile-tratment.component';

describe('MobileTratmentComponent', () => {
  let component: MobileTratmentComponent;
  let fixture: ComponentFixture<MobileTratmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileTratmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileTratmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
