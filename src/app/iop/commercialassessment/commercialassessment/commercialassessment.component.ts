import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
@Component({
  selector: 'app-commercialassessment',
  templateUrl: './commercialassessment.component.html',
  styleUrls: ['./commercialassessment.component.scss']
})
export class COMMERCIALASSESSMENTComponent implements OnInit {

  active: any;

  
  constructor(private formBuilder: FormBuilder,private location:Location) { }

  ngOnInit(): void {
  }
  back(){
    this.location.back()
  }
  
}
