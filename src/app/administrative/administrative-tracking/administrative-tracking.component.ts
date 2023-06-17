import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrative-tracking',
  templateUrl: './administrative-tracking.component.html',
  styleUrls: ['./administrative-tracking.component.scss']
})
export class AdministrativeTrackingComponent implements OnInit {
  rows:any[]=[];
  searchValue:boolean;


  constructor() { }

  ngOnInit(): void {
  }
  search(){
    this.searchValue = ! this.searchValue
  }

}
