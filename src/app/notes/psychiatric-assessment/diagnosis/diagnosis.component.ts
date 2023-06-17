import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.scss']
})
export class DiagnosisComponent implements OnInit {
  imagesrc = '/assets/images/smail-icon.png';
  diagnosismobileresponse:FormGroup
  constructor(private fb : FormBuilder) { 
    this.Init()
  }
  Init(){
    this.diagnosismobileresponse=this.fb.group({
      description:[''],
      axis1:[''],
    })
  }
  ngOnInit(): void {
  }

}
