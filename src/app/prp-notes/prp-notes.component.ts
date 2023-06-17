import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-prp-notes',
  templateUrl: './prp-notes.component.html',
  styleUrls: ['./prp-notes.component.scss']
})
export class PrpNotesComponent implements OnInit {

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