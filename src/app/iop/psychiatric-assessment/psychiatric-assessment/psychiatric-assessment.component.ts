import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-psychiatric-assessment',
  templateUrl: './psychiatric-assessment.component.html',
  styleUrls: ['./psychiatric-assessment.component.scss']
})
export class PsychiatricAssessmentComponent implements OnInit {
  active:any
  constructor(private location:Location) { }

  ngOnInit(): void {
  }
  back(){
    this.location.back()
  }
}
