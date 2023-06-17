import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss']
})
export class SignatureComponent implements OnInit {
  signaturetransitionform:FormGroup
  rows:any[]=[]
  StartTimer:any

    constructor(private formBuilder:FormBuilder,private localToast: localToastService) { }


  ngOnInit(): void {
    this.initform()
  }

  initform(){
    this.signaturetransitionform =this.formBuilder.group({
      Levelofclient:[''],
      presentat:[''],
      contributeedto:[''],
      refusedto:[''],
      unabletoparticipate:[''],
      others:[''],
      summaryoftransition:[''],
      testtest:[''],
    })
  }
  get f(){
    return this.signaturetransitionform.controls
  }
  Save(){}

}
