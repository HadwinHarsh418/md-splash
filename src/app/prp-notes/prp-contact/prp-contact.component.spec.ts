import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrpContactComponent } from './prp-contact.component';

describe('PrpContactComponent', () => {
  let component: PrpContactComponent;
  let fixture: ComponentFixture<PrpContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrpContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrpContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
