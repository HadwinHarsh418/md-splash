import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileProgressNoteCsrComponent } from './mobile-progress-note-csr.component';

describe('MobileProgressNoteCsrComponent', () => {
  let component: MobileProgressNoteCsrComponent;
  let fixture: ComponentFixture<MobileProgressNoteCsrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileProgressNoteCsrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileProgressNoteCsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
