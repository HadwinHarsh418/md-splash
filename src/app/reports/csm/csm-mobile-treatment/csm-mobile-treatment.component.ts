import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-csm-mobile-treatment',
  templateUrl: './csm-mobile-treatment.component.html',
  styleUrls: ['./csm-mobile-treatment.component.scss']
})
export class CsmMobileTreatmentComponent implements OnInit {

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
