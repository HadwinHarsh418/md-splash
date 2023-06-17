import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-child-adolescent-ques',
  templateUrl: './child-adolescent-ques.component.html',
  styleUrls: ['./child-adolescent-ques.component.scss']
})
export class ChildAdolescentQuesComponent implements OnInit {
  active: any;

  
  constructor(private location:Location) { }

  ngOnInit(): void {
  }
  back(){
    this.location.back()
  }

}
