import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-continuation-services-referral',
  templateUrl: './continuation-services-referral.component.html',
  styleUrls: ['./continuation-services-referral.component.scss']
})
export class ContinuationServicesReferralComponent implements OnInit {
  active: any;

  
  constructor(private location:Location) { }

  ngOnInit(): void {
  }
  back(){
    this.location.back()
  }

}
