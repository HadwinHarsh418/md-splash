import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.scss']
})
export class Dashboard2Component implements OnInit {
row:any;
  constructor(private Location:Location) { }

  ngOnInit(): void {
  }
  back(){
    this.Location.back()
   }

}
