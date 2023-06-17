import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-therapistcounselor',
  templateUrl: './therapistcounselor.component.html',
  styleUrls: ['./therapistcounselor.component.scss']
})
export class TherapistcounselorComponent implements OnInit {

  active: any;

  
  constructor(private formBuilder: FormBuilder,private location:Location) { }

  ngOnInit(): void {
  }
  back(){
    this.location.back()
  }
  
}
