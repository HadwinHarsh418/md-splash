import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrisisMindComponent } from './crisis-mind.component';

describe('CrisisMindComponent', () => {
  let component: CrisisMindComponent;
  let fixture: ComponentFixture<CrisisMindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrisisMindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrisisMindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
