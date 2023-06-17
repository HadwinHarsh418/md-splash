import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { Location } from '@angular/common';

@Component({
  selector: 'app-continue',
  templateUrl: './continue.component.html',
  styleUrls: ['./continue.component.scss']
})
export class ContinueComponent implements OnInit {
  pregressNotes:FormGroup
  isDisable: boolean = true;
  show:boolean = true;
  show1:boolean = true;
  StartTimer:any
  EndTime1:any
  TotalTimer:any
    
    constructor(private formBuilder:FormBuilder,private localToast: localToastService,private location:Location) { }


  ngOnInit(): void {
    this.init();
  }

  init(){
    this.pregressNotes =this.formBuilder.group({
      clientRecievingService:[''],
      clientSmoke:[''],
      clientJobCompetetive:[''],
      beenEmployed:[''],
      lookinForWork:[''],
      isTheClient:[''],

    })
  }

 get genForm(){
    return this.pregressNotes.controls;
  }

  Save(){
    markAllDirty(this.pregressNotes);
    if (this.pregressNotes.invalid) {
      this.localToast.presentError('Please fill all required fields');
      return;
    }
    else{ 
      
    }
  }

  back(){
    this.location.back();
  }

  showField(data){
    if(data.target.value == '2'){
      this.show = false;
    }else{
      this.show = true;
    }
  }

  showField1(data){
    if(data.target.value == '1'){
      this.show1 = false;
    }else{
      this.show1 = true;
    }
  }

}
