import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';


@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss']
})
export class SignatureComponent implements OnInit {
  signatureForm!:FormGroup
  rows:any[]=[]
  StartTimer:any

    constructor(private formBuilder:FormBuilder,private localToast: localToastService) { }


  ngOnInit(): void {
    this.initform()
  }

  initform(){
    this.signatureForm =this.formBuilder.group({
    City:[''],
    State:[''],
    ZipCode:[''],
    Phone:[''],
    })
  }
  get f(){
    return this.signatureForm.controls
  }
  Save(){}

}
