import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientListingComponent } from 'src/app/client/client-listing/client-listing.component';
import { HelpComponent } from 'src/app/help/help.component';
import { ClientAddService } from 'src/app/service/client-add.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('clientListing') clientListing : ElementRef<any>;
  clientvalue: any;

  constructor(private modalService: NgbModal,private clientService:ClientAddService,
    private router:Router) { }

  ngOnInit(): void {
    this.getListing()
  }

  getListing(){
    this.clientService.GetDashboardDetails().subscribe((res:any)=>{
    })
  }
  open() {
    const modalRef = this.modalService.open(ClientListingComponent,
      {backdrop: true, centered:true,size:'xl',
      modalDialogClass:'dark-bg select-city-modal', });
      modalRef.componentInstance.userItem  = this.clientvalue;
      modalRef.componentInstance.modalRef  = modalRef;
}
openHelpModal() {
  const modalRef = this.modalService.open(HelpComponent,
    {backdrop: true, centered:true,size:'sm',
    modalDialogClass:'dark-bg select-city-modal', });
    modalRef.componentInstance.userItem  = this.clientvalue;
    modalRef.componentInstance.modalRef  = modalRef;
}
  close(){
    this.modalService.dismissAll();
  }
  logout(){
    this.router.navigate(['/']);
    localStorage.removeItem('token_Key');
    localStorage.removeItem('rolPrm');
    localStorage.removeItem('ID');
  }
}
