import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-psychosocial-assessment',
  templateUrl: './psychosocial-assessment.component.html',
  styleUrls: ['./psychosocial-assessment.component.scss'],
  providers: [],
})
export class PsychosocialAssessmentComponent implements OnInit {
  active=1

  constructor(private location:Location) { }

  ngOnInit(): void {
  }
  back(){
    this.location.back()
  }
}
