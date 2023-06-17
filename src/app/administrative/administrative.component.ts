import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-administrative',
  templateUrl: './administrative.component.html',
  styleUrls: ['./administrative.component.scss']
})
export class AdministrativeComponent implements OnInit {
  active = 1;
  currentTab:number = 0
  currentTabMain:number=1;
  ShowContentUsers:boolean;
  ShowFormProviders:boolean;
  displayProp: boolean = false;
  showClientInfo: boolean;
;

  constructor(private Location:Location) {
    this.active = 1;
   }

  ngOnInit(): void {
  }
  back(){
    this.Location.back()
  }
  changeTab(tab){
    if(this.currentTab == tab){
      return
    }
    else
    this.currentTab = tab;
  }

  changeTabMain(tab){
    if(this.currentTabMain == tab){
      return
    }else{
      this.currentTabMain = tab;
      this.currentTab = 0;
      this.displayProp = false;
    }
    if(this.currentTabMain == 4 || this.currentTabMain == 6 || this.currentTabMain == 7 ){
      this.displayProp = true;
    }
  }
  showSideContent(data){
    this.ShowContentUsers = data;
    
  }
  showClientContent(data){
    this.showClientInfo = data
  }
  showSideForm(data){
    this.ShowFormProviders = data;
  }
}
