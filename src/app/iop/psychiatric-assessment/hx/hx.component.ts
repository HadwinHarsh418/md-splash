import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hx',
  templateUrl: './hx.component.html',
  styleUrls: ['./hx.component.scss']
})
export class HxComponent implements OnInit {
  hxForm:FormGroup

  constructor(private formBuilder:FormBuilder,private localToast: localToastService,private location:Location) { }

  ngOnInit(): void {
    this.init();
  }

  init(){
    this.hxForm =this.formBuilder.group({
      social:[''],
      education:[''],
      development:[''],
      family:['']
    })
  }

 get genForm(){
    return this.hxForm.controls;
  }

  Save(){
    markAllDirty(this.hxForm);
    if (this.hxForm.invalid) {
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
