import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientListingComponent } from '../../client/client-listing/client-listing.component';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {
  @ViewChild('clientListing') clientListing : ElementRef<any>;
  clientvalue:string = 'id';
  constructor(private modalService: NgbModal,private router:Router) { }

  ngOnInit(): void {
  }

  open(){
    const modalRef = this.modalService.open(ClientListingComponent,
      {backdrop: true, centered:true,size:'xl',
      modalDialogClass:'dark-bg select-city-modal', });
      modalRef.componentInstance.userItem  = this.clientvalue;
      // modalRef.componentInstance.modalRef  = modalRef;
  }
  logOut(){
    this.router.navigate(['/']);
    localStorage.removeItem('token_Key');
    localStorage.removeItem('rolPrm');
    localStorage.removeItem('ID');
  }
}
