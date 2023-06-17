import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.scss']
})
export class DiagnosisComponent implements OnInit {
  imagesrc = '/assets/images/smail-icon.png';
  constructor() { }

  ngOnInit(): void {
  }

}
