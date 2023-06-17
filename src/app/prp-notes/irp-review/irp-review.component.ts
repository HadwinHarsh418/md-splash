import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
@Component({
  selector: 'app-irp-review',
  templateUrl: './irp-review.component.html',
  styleUrls: ['./irp-review.component.scss']
})
export class IrpReviewComponent implements OnInit {
  active=1;
  tabindex: any;
  constructor(private Location:Location) { }

  ngOnInit(): void {
  }
  back(){
    this.Location.back()
  }
  tabchange(e){
    this.tabindex = e
  }
}
