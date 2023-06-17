import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-administrative-users',
  templateUrl: './administrative-users.component.html',
  styleUrls: ['./administrative-users.component.scss']
})
export class AdministrativeUsersComponent implements OnInit {
  @Output() showSideContent: EventEmitter<number> = new EventEmitter();
  checkedValue: any;

  constructor() { }

  ngOnInit(): void {
  }
  clickedData(){
    this.checkedValue = !this.checkedValue
    this.showSideContent.emit(this.checkedValue)
  }
}
