import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  showpayor:boolean
  AddPayments:boolean
  addretraction:boolean
  viewallpayment:boolean
  viewallretraction:boolean
  viewDecodedFiles:boolean
  viewEra:boolean
  active = 1;
  currentTab: number = 0
  constructor(private Location:Location) {
    this.active = 1;
   }

  ngOnInit(): void {
  }
  changeTab(tab){
    if(this.currentTab == tab){
      return
    }else
    this.currentTab = tab;
  }
  back(){
    this.Location.back()
  }

}