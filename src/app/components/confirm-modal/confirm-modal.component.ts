import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {

  @Input() modalData:
    { title:string, subtitle:string, cancelBtnTxt?:string, 
      confirmBtnTxt?:string, extraData?:any, cancelColor?:string, confirmlColor?:string } = 
    { title:'', subtitle:'', cancelBtnTxt:'Cancel', confirmBtnTxt:'Confirm', cancelColor:'success', confirmlColor:'danger' };
  
  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

}
