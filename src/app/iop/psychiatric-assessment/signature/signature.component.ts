import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss']
})
export class SignatureComponent implements OnInit {

  signature:FormGroup
  constructor(private formbuilder :FormBuilder) { 
    this.Init()
  }
  Init(){
    this.signature=this.formbuilder.group({
      testtest7:['']
    })
  }
  ngOnInit(): void {
  }

}
