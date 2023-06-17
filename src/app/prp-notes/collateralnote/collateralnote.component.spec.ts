import { ComponentFixture, TestBed } from '@angular/core/testing';

import { COLLATERALNOTEComponent } from './collateralnote.component';

describe('COLLATERALNOTEComponent', () => {
  let component: COLLATERALNOTEComponent;
  let fixture: ComponentFixture<COLLATERALNOTEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ COLLATERALNOTEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(COLLATERALNOTEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
