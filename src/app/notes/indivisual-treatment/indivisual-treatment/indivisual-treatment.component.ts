import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { ActivatedRoute } from '@angular/router';
import { markAllDirty } from 'src/app/_helpers/utils';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
@Component({
  selector: 'app-indivisual-treatment',
  templateUrl: './indivisual-treatment.component.html',
  styleUrls: ['./indivisual-treatment.component.scss']
})
export class IndivisualTreatmentComponent implements OnInit {
  imagesrc = '/assets/images/smail-icon.png';
  show:boolean = true;
  active:any;
  tabindex:number=1;
  IndivisualTreatment:FormGroup
  constructor(private location:Location,
    private localToast: localToastService,
              private fb:FormBuilder,private actRout:ActivatedRoute) {
                this.actRout.params.subscribe((res:any)=>{
                  if(res.id == '1'){
                    this.show = false;
                  }
                  else {
                    this.show = true;
                  }
                })
               }

  ngOnInit(): void {
    this.inIt();
  }
  inIt(){
    this.IndivisualTreatment=this.fb.group({
      datetreatment:['',Validators.required],
      renderprovider:['',Validators.required],
      ProcedureCode1:['',Validators.required],
      location_required:['',Validators.required],
      instype:['',],
      authNumber:['',Validators.required],
      
    })
  }
  get genForm(){
    return this.IndivisualTreatment.controls
  }
  back(){
    this.location.back()
  }
  tabchange(e:any){ 
    this.tabindex=e
  }
  Save(){
    markAllDirty(this.IndivisualTreatment);
    if (this.IndivisualTreatment.invalid) {
      this.localToast.presentError('Please fill all required fields');
      return;
    }
    else{
      
    }
  }
}
