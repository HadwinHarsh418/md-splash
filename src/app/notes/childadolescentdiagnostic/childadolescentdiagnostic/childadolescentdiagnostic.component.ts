import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-childadolescentdiagnostic',
  templateUrl: './childadolescentdiagnostic.component.html',
  styleUrls: ['./childadolescentdiagnostic.component.scss']
})
export class ChildadolescentdiagnosticComponent implements OnInit {
  active:any
  constructor(private location:Location) { }

  ngOnInit(): void {
  }
  back(){
    this.location.back()
  }

}
