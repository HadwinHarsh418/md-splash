import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcholUseComponent } from './alchol-use.component';

describe('AlcholUseComponent', () => {
  let component: AlcholUseComponent;
  let fixture: ComponentFixture<AlcholUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlcholUseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlcholUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
