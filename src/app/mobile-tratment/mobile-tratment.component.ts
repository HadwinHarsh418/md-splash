import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-mobile-tratment',
  templateUrl: './mobile-tratment.component.html',
  styleUrls: ['./mobile-tratment.component.scss']
})
export class MobileTratmentComponent implements OnInit {
  show: boolean = true;
  show1: boolean = false;
  imagesrc = '/assets/images/arrow-image.png';

  constructor(private _location:Location) { }

  ngOnInit(): void {
  }

  backClicked() {
    this._location.back();
  }
}
