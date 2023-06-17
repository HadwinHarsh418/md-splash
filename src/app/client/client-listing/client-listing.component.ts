import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, Subject } from 'rxjs';
import { ClientAddService } from 'src/app/service/client-add.service';
import { AuthenticationService } from 'src/app/_helpers/auth/authentication.service';
import { Page } from 'src/app/_helpers/models/page';

@Component({
  selector: 'app-client-listing',
  templateUrl: './client-listing.component.html',
  styleUrls: ['./client-listing.component.scss']
})
export class ClientListingComponent implements OnInit {
  rows:any;
  public page = new Page();
  showEntry:number = 10;
  loadingIndicator:boolean = false;
  currentUserId: any;
  private keyUpFxn = new Subject<any>(); 


  constructor(private clientService:ClientAddService,  public activeModal: NgbActiveModal,private auth:AuthenticationService) {
    this.currentUserId = this.auth.currentUserValue['Id']
    
   }

  ngOnInit(): void {
    this.setPage({ offset: 0 });
    this.keyUpFxn.pipe(
      debounceTime(1000)
    ).subscribe(searchTextValue => {
      if (searchTextValue)
        this.setPage({offset: 0},searchTextValue);
    });
  }

  pageSize(){
    this.page.size = this.showEntry
    this.setPage({offset: 0})
  }
  searchValue(event:any){
    this.keyUpFxn.next(event.target.value)
  }

  setPage(pageInfo,search?:any) {
    this.loadingIndicator = true;
    this.page.pageNumber = pageInfo.offset;
    let data =
    {
      "pagination":{"pageSize":this.page.size,"pageNo":this.page.pageNumber},
      "search":{"value":search}
    }
    this.clientService.getClientListing(data,this.currentUserId).subscribe((res:any)=>{
      this.loadingIndicator=false;
      this.rows=res.Data.ClientInfo;
            this.page.size = res.Data.PageSize;
            this.page.totalElements = res.Data.TotalCount;
            this.page.pageNumber = res.Data.PageNo;
            this.page.totalPages = res.Data.TotalPages;
    },err=>{
      this.loadingIndicator=false;
    })

  }
  closeTable() {
    this.activeModal.dismiss()
  }

ngOnDestroy(): void {
}
}
