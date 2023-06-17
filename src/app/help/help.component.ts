import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
  @Input() modalRef:any;
  constructor() {}

  ngOnInit(): void {
  }
  close(){
    this.modalRef.dismiss()
  }

}
