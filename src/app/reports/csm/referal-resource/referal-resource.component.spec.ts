import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferalResourceComponent } from './referal-resource.component';

describe('ReferalResourceComponent', () => {
  let component: ReferalResourceComponent;
  let fixture: ComponentFixture<ReferalResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferalResourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferalResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
