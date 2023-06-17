import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RehabServiceComponent } from './rehab-service.component';

describe('RehabServiceComponent', () => {
  let component: RehabServiceComponent;
  let fixture: ComponentFixture<RehabServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RehabServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RehabServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
