import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClientAddService } from '../service/client-add.service';
import { localToastService } from '../_helpers/services/toaster.service';
import { Location } from "@angular/common";

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  
  active = 1;
  contactInfoData !: FormGroup;
  showpayor:boolean=false
  showContent:boolean=false;
  show: boolean = true;
  show1: boolean = false;
  showClientByZipCode:boolean=false
  showClientStatus:boolean=false
  underAgeStatus:boolean=false
  showClientPayor:boolean=false
  showStaffRoster:boolean=false
  currentTab: number = 0
  userId:any;
  contactClientInfo:any;
  

  constructor(private formBuilder:FormBuilder, private clientService:ClientAddService, private activatedRoute:ActivatedRoute, private localToaster:localToastService,private Location:Location) {
    this.activatedRoute.params.subscribe(
      res => {
        
        if (res['id']) {
          this.userId =  res['id'];
          
        }
      }
    )
   }

  ngOnInit(): void {
  }
  submitForm() {
   }
   back(){
    this.Location.back()
   }
   
   changeTab(tab){
    if(this.currentTab == tab){
      return
    }else
    this.currentTab = tab;
  }
  changeTab1(tab){
    if(this.currentTab == tab){
      return
    }else
    this.currentTab = tab;
  }
  
  }
