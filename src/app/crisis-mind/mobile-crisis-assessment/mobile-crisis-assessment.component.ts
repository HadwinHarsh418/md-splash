import { Component, OnInit } from '@angular/core';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { Location } from "@angular/common";

@Component({
  selector: 'app-mobile-crisis-assessment',
  templateUrl: './mobile-crisis-assessment.component.html',
  styleUrls: ['./mobile-crisis-assessment.component.scss']
})
export class MobileCrisisAssessmentComponent implements OnInit {
  active:number = 1;
      constructor(private localToast: localToastService,private location:Location) { }

  ngOnInit(): void {
  }
  back(){
    this.location.back();
  }
  Save(){}
}
