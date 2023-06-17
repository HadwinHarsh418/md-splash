import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-psycosocial-assessment',
  templateUrl: './psycosocial-assessment.component.html',
  styleUrls: ['./psycosocial-assessment.component.scss']
})
export class PsycosocialAssessmentComponent implements OnInit {

  iop='iop'
  
  active=1
  constructor(private location:Location) { }

  ngOnInit(): void {
  }
  back(){
    this.location.back()
  }
}
