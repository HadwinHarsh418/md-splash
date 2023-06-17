import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-adult-diagnosis-assesment',
  templateUrl: './adult-diagnosis-assesment.component.html',
  styleUrls: ['./adult-diagnosis-assesment.component.scss']
})
export class AdultDiagnosisAssesmentComponent implements OnInit {

  active:any
  constructor(private location:Location) { }

  ngOnInit(): void {
  }
  back(){
    this.location.back()
  }

}
