import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.scss']
})
export class DiagnosisComponent implements OnInit {
  imagesrc = '/assets/images/smail-icon.png';
  diagnosisiop:FormGroup
  constructor(private fb:FormBuilder) { 
    this.init()
  }
  init(){
    this.diagnosisiop=this.fb.group({
      axis1:[''],
      description:[''],
    })
  }
  ngOnInit(): void {
  }

}
