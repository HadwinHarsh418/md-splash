import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinueServiceComponent } from './continue-service.component';

describe('ContinueServiceComponent', () => {
  let component: ContinueServiceComponent;
  let fixture: ComponentFixture<ContinueServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContinueServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinueServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
