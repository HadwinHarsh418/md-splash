import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientAddService } from 'src/app/service/client-add.service';
import { Page } from 'src/app/_helpers/models/page';

@Component({
  selector: 'app-reportunder-age-status',
  templateUrl: './reportunder-age-status.component.html',
  styleUrls: ['./reportunder-age-status.component.scss']
})
export class ReportunderAgeStatusComponent implements OnInit {
  rows:any;
  public page = new Page();
  searchStr:any;
  showEntry:number = 10;
  loadingIndicator:boolean = false;
  currentUserId: any;
  showTable:boolean=false

  constructor(private clientService:ClientAddService) {
    this.currentUserId = localStorage.getItem('ID');

   }

  ngOnInit(): void {
    this.setPage({ offset: 0 })
  }

  pageSize(){
    this.page.size = this.showEntry
    this.setPage({offset: 0})
  }
  setPage(pageInfo) {
    this.loadingIndicator = true;
    this.page.pageNumber = pageInfo.offset;
    this.page.size = 10;
    let data =
    {
      "pagination":{"pageSize":this.page.size,"pageNo":this.page.pageNumber},
      "search":{"value":this.searchStr}
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
    // this.activeModal.dismiss()
  }

ngOnDestroy(): void {
}
getDetail(){
  this.showTable=true
}
}
