import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HxComponent } from './hx.component';

describe('HxComponent', () => {
  let component: HxComponent;
  let fixture: ComponentFixture<HxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
