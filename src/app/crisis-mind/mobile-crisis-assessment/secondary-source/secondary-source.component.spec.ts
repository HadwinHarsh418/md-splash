import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondarySourceComponent } from './secondary-source.component';

describe('SecondarySourceComponent', () => {
  let component: SecondarySourceComponent;
  let fixture: ComponentFixture<SecondarySourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondarySourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondarySourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
