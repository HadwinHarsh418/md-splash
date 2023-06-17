import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';


@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss']
})
export class SignatureComponent implements OnInit {
  signaturecommercial:FormGroup
  rows:any[]=[]
  StartTimer:any

    constructor(private formBuilder:FormBuilder,private localToast: localToastService) { }


  ngOnInit(): void {
    this.initform()
  }

  initform(){
    this.signaturecommercial =this.formBuilder.group({
      testtest:[''],
      testtest2:[''],
    })
  }
  get f(){
    return this.signaturecommercial.controls
  }
  Save(){}

}
