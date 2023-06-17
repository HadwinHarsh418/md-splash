import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DastComponent } from './dast.component';

describe('DastComponent', () => {
  let component: DastComponent;
  let fixture: ComponentFixture<DastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
