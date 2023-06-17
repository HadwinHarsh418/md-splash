import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-iop',
  templateUrl: './iop.component.html',
  styleUrls: ['./iop.component.scss']
})
export class IopComponent implements OnInit {

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
