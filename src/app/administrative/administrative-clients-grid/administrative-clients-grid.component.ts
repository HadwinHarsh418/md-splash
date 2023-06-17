import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrative-clients-grid',
  templateUrl: './administrative-clients-grid.component.html',
  styleUrls: ['./administrative-clients-grid.component.scss']
})
export class AdministrativeClientsGridComponent implements OnInit {
  showDetails:boolean = false;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  editContent(){
    this.showDetails = !this.showDetails
  }

}
