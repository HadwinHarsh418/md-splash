import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dx',
  templateUrl: './dx.component.html',
  styleUrls: ['./dx.component.scss']
})
export class DxComponent implements OnInit {
  imagesrc = '/assets/images/smail-icon.png';

  constructor() { }

  ngOnInit(): void {
  }

}
