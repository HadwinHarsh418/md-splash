import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrative-incorect-login-tracks',
  templateUrl: './administrative-incorect-login-tracks.component.html',
  styleUrls: ['./administrative-incorect-login-tracks.component.scss']
})
export class AdministrativeIncorectLoginTracksComponent implements OnInit {
  rows:any[]=[];
  searchValue:boolean;


  constructor() { }

  ngOnInit(): void {
  }
  search(){
    this.searchValue = ! this.searchValue
  }

}
