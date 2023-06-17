import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VieweraComponent } from './viewera.component';

describe('VieweraComponent', () => {
  let component: VieweraComponent;
  let fixture: ComponentFixture<VieweraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VieweraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VieweraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
