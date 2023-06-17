import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrpclaimsComponent } from './prpclaims.component';

describe('PrpclaimsComponent', () => {
  let component: PrpclaimsComponent;
  let fixture: ComponentFixture<PrpclaimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrpclaimsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrpclaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
