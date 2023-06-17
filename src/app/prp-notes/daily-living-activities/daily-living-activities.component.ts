import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-daily-living-activities',
  templateUrl: './daily-living-activities.component.html',
  styleUrls: ['./daily-living-activities.component.scss']
})
export class DailyLivingActivitiesComponent implements OnInit {
  StartTimer:any[]=[]
  EndTime1:any[]=[]
  TotalTimer:any[]=[]

  constructor(private Location:Location) { }

  ngOnInit(): void {
  }

  Save(){}
  back(){
    this.Location.back()
  }
}
