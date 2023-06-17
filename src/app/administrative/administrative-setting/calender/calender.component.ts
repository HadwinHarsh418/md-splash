import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {
  closeResult = '';

	constructor(private modalService: NgbModal) {}

	open(content) {
		const modalRef = this.modalService.open(content,
			{backdrop: true, centered:true,size:'md',
			modalDialogClass:'dark-bg select-city-modal', });
			modalRef.componentInstance.modalRef  = modalRef;
	}

	getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}
  ngOnInit(): void {
  }

}
