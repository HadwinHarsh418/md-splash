import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-content',
  templateUrl: './right-content.component.html',
  styleUrls: ['./right-content.component.scss']
})
export class RightContentComponent implements OnInit {
  @Input() CurrentTab:number;
  constructor() { }

  ngOnInit(): void {
  }

}
