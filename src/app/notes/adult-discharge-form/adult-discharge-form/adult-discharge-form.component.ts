import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-adult-discharge-form',
  templateUrl: './adult-discharge-form.component.html',
  styleUrls: ['./adult-discharge-form.component.scss']
})
export class AdultDischargeFormComponent implements OnInit {
  active: any;

  
  constructor(private location:Location) { }

  ngOnInit(): void {
  }
  back(){
    this.location.back()
  }

}
