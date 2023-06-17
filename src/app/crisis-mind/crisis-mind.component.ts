import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-crisis-mind',
  templateUrl: './crisis-mind.component.html',
  styleUrls: ['./crisis-mind.component.scss']
})
export class CrisisMindComponent implements OnInit {

  imagesrc = '/assets/images/arrow-image.png';
  show: boolean = true;
  show1: boolean = false;
  constructor(private _location:Location) { }

  ngOnInit(): void {
  }

  backClicked() {
    this._location.back();
  }

  onClickTab(){
    alert('No Document Available')
  }
}
