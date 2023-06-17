import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-lucas-individualized-treatment',
  templateUrl: './lucas-individualized-treatment.component.html',
  styleUrls: ['./lucas-individualized-treatment.component.scss']
})
export class LucasIndividualizedTreatmentComponent implements OnInit {

  active:any
  tabindex: any;
  constructor(private location:Location) { }

  ngOnInit(): void {
  }
  back(){
    this.location.back()
  }
  tabchange(e:any){ 
    this.tabindex=e
  }
}
