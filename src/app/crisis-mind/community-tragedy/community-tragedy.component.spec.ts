import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityTragedyComponent } from './community-tragedy.component';

describe('CommunityTragedyComponent', () => {
  let component: CommunityTragedyComponent;
  let fixture: ComponentFixture<CommunityTragedyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityTragedyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityTragedyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
