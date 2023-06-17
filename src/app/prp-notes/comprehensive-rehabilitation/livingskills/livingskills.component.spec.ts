import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivingskillsComponent } from './livingskills.component';

describe('LivingskillsComponent', () => {
  let component: LivingskillsComponent;
  let fixture: ComponentFixture<LivingskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivingskillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivingskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
