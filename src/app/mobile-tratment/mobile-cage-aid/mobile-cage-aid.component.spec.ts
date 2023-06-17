import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCageAidComponent } from './mobile-cage-aid.component';

describe('MobileCageAidComponent', () => {
  let component: MobileCageAidComponent;
  let fixture: ComponentFixture<MobileCageAidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileCageAidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileCageAidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
