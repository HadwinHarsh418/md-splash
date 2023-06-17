import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityConcernComponent } from './community-concern.component';

describe('CommunityConcernComponent', () => {
  let component: CommunityConcernComponent;
  let fixture: ComponentFixture<CommunityConcernComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityConcernComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityConcernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
