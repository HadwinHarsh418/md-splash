import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dc-summary-note',
  templateUrl: './dc-summary-note.component.html',
  styleUrls: ['./dc-summary-note.component.scss']
})
export class DcSummaryNoteComponent implements OnInit {
  active: any;

  
  constructor(private location:Location) { }

  ngOnInit(): void {
  }
  back(){
    this.location.back()
  }

}
