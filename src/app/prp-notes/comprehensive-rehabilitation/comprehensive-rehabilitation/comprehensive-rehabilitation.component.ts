import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { Location } from '@angular/common';

@Component({
  selector: 'app-comprehensive-rehabilitation',
  templateUrl: './comprehensive-rehabilitation.component.html',
  styleUrls: ['./comprehensive-rehabilitation.component.scss']
})
export class ComprehensiveRehabilitationComponent implements OnInit {
 
  active:any
  constructor(private location:Location) { }

  ngOnInit(): void {
  }
  back(){
    this.location.back()
  }
}
