import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { Location } from '@angular/common';

@Component({
  selector: 'app-substance-assessment',
  templateUrl: './substance-assessment.component.html',
  styleUrls: ['./substance-assessment.component.scss']
})
export class SubstanceAssessmentComponent implements OnInit {
  substanceForm:FormGroup
  imagesrc = '/assets/images/smail-icon.png';

  constructor(private formBuilder:FormBuilder,private localToast: localToastService,private location:Location) { }

  ngOnInit(): void {
    this.init();
  }

  init(){
    this.substanceForm =this.formBuilder.group({
     
    })
  }

 get genForm(){
    return this.substanceForm.controls;
  }

  Save(){
    markAllDirty(this.substanceForm);
    if (this.substanceForm.invalid) {
      this.localToast.presentError('Please fill all required fields');
      return;
    }
    else{ 
      
    }
  }

  back(){
    this.location.back();
  }

}
