import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderUserFormComponent } from './provider-user-form.component';

describe('ProviderUserFormComponent', () => {
  let component: ProviderUserFormComponent;
  let fixture: ComponentFixture<ProviderUserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderUserFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
