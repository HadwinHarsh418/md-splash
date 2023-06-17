import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupNotesComponent } from './group-notes.component';

describe('GroupNotesComponent', () => {
  let component: GroupNotesComponent;
  let fixture: ComponentFixture<GroupNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
