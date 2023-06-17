import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.scss']
})
export class DiagnosisComponent implements OnInit {
  imagesrc = '/assets/images/smail-icon.png';
  diagnosisCommercial:FormGroup
  constructor( private formbuilder:FormBuilder) {
    this.init()
   }
   init(){
    this.diagnosisCommercial=this.formbuilder.group({
      primary:[''],
      code:[''],
      description:[''],
    })
   }
  ngOnInit(): void {
  }

}
