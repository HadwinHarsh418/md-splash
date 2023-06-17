import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewera',
  templateUrl: './viewera.component.html',
  styleUrls: ['./viewera.component.scss']
})
export class VieweraComponent implements OnInit {
  rows:any[]=[]
  UpcomingAppointments:any[]=[]


  constructor() {
    this.UpcomingAppointments=[
      {InsuranceType: 'Test Date', PolicyType: 'details1', Payor: 'details1', TerminationDate: '10/04/2022', EffectiveDate: '01/04/2022'},
      {InsuranceType: 'Test Date', PolicyType: 'details1', Payor: 'details1', TerminationDate: '10/04/2022', EffectiveDate: '01/04/2022'},
      {InsuranceType: 'Test Date', PolicyType: 'details1', Payor: 'details1', TerminationDate: '10/04/2022', EffectiveDate: '01/04/2022'},
      {InsuranceType: 'Test Date', PolicyType: 'details1', Payor: 'details1', TerminationDate: '10/04/2022', EffectiveDate: '01/04/2022'},
      {InsuranceType: 'Test Date', PolicyType: 'details1', Payor: 'details1', TerminationDate: '10/04/2022', EffectiveDate: '01/04/2022'},
      {InsuranceType: 'Test Date', PolicyType: 'details1', Payor: 'details1', TerminationDate: '10/04/2022', EffectiveDate: '01/04/2022'},
  
    ]
   }
  ngOnInit(): void {
  }

}
