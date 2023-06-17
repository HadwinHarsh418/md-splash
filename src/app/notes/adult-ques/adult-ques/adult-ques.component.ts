import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-adult-ques',
  templateUrl: './adult-ques.component.html',
  styleUrls: ['./adult-ques.component.scss']
})
export class AdultQuesComponent implements OnInit {

  active:any
  constructor(private location:Location) { }

  ngOnInit(): void {
  }
  back(){
    this.location.back()
  }

}
