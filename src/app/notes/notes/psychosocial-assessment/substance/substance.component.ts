import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-substance',
  templateUrl: './substance.component.html',
  styleUrls: ['./substance.component.scss']
})
export class SubstanceComponent implements OnInit {
  imagesrc = '/assets/images/smail-icon.png';
  color:boolean=false
  hideDiv: boolean = false
  @Inject(DOCUMENT) private document: Document
  constructor(private el: ElementRef) { }

  ngOnInit(): void {
  }

  onChange(e){
    this.color=e.target.checked
  }
  stylechange(){
    if(this.color == true){
      return {'colorTextarea': true}
    }
    else{
      return {'colorTextarea': false}
    }
  }
}
