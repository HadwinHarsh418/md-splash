import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdecodedfilesComponent } from './viewdecodedfiles.component';

describe('ViewdecodedfilesComponent', () => {
  let component: ViewdecodedfilesComponent;
  let fixture: ComponentFixture<ViewdecodedfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdecodedfilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdecodedfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
