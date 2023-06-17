import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrpAuthFormComponent } from './prp-auth-form.component';

describe('PrpAuthFormComponent', () => {
  let component: PrpAuthFormComponent;
  let fixture: ComponentFixture<PrpAuthFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrpAuthFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrpAuthFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
