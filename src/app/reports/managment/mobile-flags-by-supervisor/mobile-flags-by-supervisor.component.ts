import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-flags-by-supervisor',
  templateUrl: './mobile-flags-by-supervisor.component.html',
  styleUrls: ['./mobile-flags-by-supervisor.component.scss']
})
export class MobileFlagsBySupervisorComponent implements OnInit {

  rows:any[]=[]
  UpcomingAppointments:any[]=[]
  showTable:boolean=false
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

  getDetail(){
    this.showTable=true
  }
}
