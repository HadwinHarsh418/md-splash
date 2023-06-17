import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrpComponent } from './prp.component';

describe('PrpComponent', () => {
  let component: PrpComponent;
  let fixture: ComponentFixture<PrpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
