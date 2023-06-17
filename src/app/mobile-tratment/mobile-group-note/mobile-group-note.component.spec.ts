import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileGroupNoteComponent } from './mobile-group-note.component';

describe('MobileGroupNoteComponent', () => {
  let component: MobileGroupNoteComponent;
  let fixture: ComponentFixture<MobileGroupNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileGroupNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileGroupNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
