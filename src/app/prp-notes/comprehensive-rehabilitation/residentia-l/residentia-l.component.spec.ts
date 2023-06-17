import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentiaLComponent } from './residentia-l.component';

describe('ResidentiaLComponent', () => {
  let component: ResidentiaLComponent;
  let fixture: ComponentFixture<ResidentiaLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentiaLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentiaLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
