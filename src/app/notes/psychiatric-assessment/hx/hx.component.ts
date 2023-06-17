import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-hx',
  templateUrl: './hx.component.html',
  styleUrls: ['./hx.component.scss']
})
export class HxComponent implements OnInit {
  hxmobiletreatment:FormGroup
  constructor(private fb:FormBuilder) { 
    this.init()
  }
  init(){
    this.hxmobiletreatment=this.fb.group({
      socialhistory:[''],
      educationalhistory:[''],
      developmenthistory:[''],
    })
  }
  ngOnInit(): void {
  }
  Save(){}

}
