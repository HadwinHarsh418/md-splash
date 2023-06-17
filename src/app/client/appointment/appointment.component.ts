import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/_helpers/services/api.service';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { Location } from "@angular/common";

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  rows:any;
  userId:any;
  PastAppointmentsDetails: any;
  UpcomingAppointments: any;


  constructor(private formBuilder:FormBuilder,private localToast: localToastService,
    private location:Location,private apiService: ApiService,
    private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(
      res => {

        if (res['id']) {
          this.userId =  res['id'];

        }
      }
    )
    this.getDetails()
  }

  ngOnInit(): void {
  }

  getDetails(){
    this.apiService.GetUpcomingAppointments(this.userId).subscribe((res:any)=>{
      this.UpcomingAppointments = res.Data;

    })
    this.apiService.GetPastAppointments(this.userId).subscribe((res:any)=>{
      this.PastAppointmentsDetails = res.Data

    })
  }

}
