import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-discharge-sumaary',
  templateUrl: './discharge-sumaary.component.html',
  styleUrls: ['./discharge-sumaary.component.scss']
})
export class DischargeSumaaryComponent implements OnInit {

  active: any;
  showAuth: boolean=true
  
  
  constructor(private formBuilder: FormBuilder,private location:Location,) { 
    
  }

  ngOnInit(): void {
  }
  back(){
    this.location.back()
  }
  
}
