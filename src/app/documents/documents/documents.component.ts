import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { Location } from '@angular/common';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

  imagesrc = '/assets/images/arrow-image.png';
  show: boolean = true;
  show1: boolean = false;
  docForm:FormGroup

  constructor(private _location:Location,private formBuilder:FormBuilder,private localToast: localToastService) { }

  ngOnInit(): void {
    this.init();
  }

  init(){
    this.docForm =this.formBuilder.group({
    
    })
  }

 get genForm(){
    return this.docForm.controls;
  }

  Save(){
    markAllDirty(this.docForm);
    if (this.docForm.invalid) {
      this.localToast.presentError('Please fill all required fields');
      return;
    }
    else{ 
      
    }
  }

  backClicked() {
    this._location.back();
  }

  onClickTab(){
    alert('No Document Available')
  }

}
