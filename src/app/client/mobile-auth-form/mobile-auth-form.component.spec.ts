import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAuthFormComponent } from './mobile-auth-form.component';

describe('MobileAuthFormComponent', () => {
  let component: MobileAuthFormComponent;
  let fixture: ComponentFixture<MobileAuthFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileAuthFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileAuthFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
