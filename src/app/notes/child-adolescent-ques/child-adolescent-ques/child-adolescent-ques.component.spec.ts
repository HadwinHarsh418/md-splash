import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAdolescentQuesComponent } from './child-adolescent-ques.component';

describe('ChildAdolescentQuesComponent', () => {
  let component: ChildAdolescentQuesComponent;
  let fixture: ComponentFixture<ChildAdolescentQuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildAdolescentQuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildAdolescentQuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
