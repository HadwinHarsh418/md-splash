import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-additional-info',
  templateUrl: './additional-info.component.html',
  styleUrls: ['./additional-info.component.scss']
})
export class AdditionalInfoComponent implements OnInit {

  individualtreatmentform:FormGroup
  constructor(private fb:FormBuilder) { 
    this.init()
  }
  init(){
    this.individualtreatmentform=this.fb.group({
      IndividualTreatmentExpectations:[''],
      strength:[''],
      weakness:[''],
      First_Nadditionalinfo:[''],
      clientneeds:[''],
      clientabilities:[''],
      clientprefrence:[''],
    })
  }
  ngOnInit(): void {
  }

}
