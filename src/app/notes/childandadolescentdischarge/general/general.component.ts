import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  active: any;

  
  constructor(private formBuilder: FormBuilder,private location:Location) { }

  ngOnInit(): void {
  }
  back(){
    this.location.back()
  }
  
}
