import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.scss']
})
export class EncounterComponent implements OnInit {
  imagesrc = '/assets/images/smail-icon.png';
  constructor() { }

  ngOnInit(): void {
  }

}
