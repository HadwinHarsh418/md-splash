import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprehensiveRehabilitationComponent } from './comprehensive-rehabilitation.component';

describe('ComprehensiveRehabilitationComponent', () => {
  let component: ComprehensiveRehabilitationComponent;
  let fixture: ComponentFixture<ComprehensiveRehabilitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprehensiveRehabilitationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprehensiveRehabilitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
