import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';


@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss']
})
export class SignatureComponent implements OnInit {
  signatureadultwuesform:FormGroup
  rows:any[]=[]
  StartTimer:any

    constructor(private formBuilder:FormBuilder,private localToast: localToastService) { }


  ngOnInit(): void {
    this.initform()
  }

  initform(){
    this.signatureadultwuesform =this.formBuilder.group({
      testtest:[''],
    })
  }
  get f(){
    return this.signatureadultwuesform.controls
  }
  Save(){}

}
