import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-administrative-clients',
  templateUrl: './administrative-clients.component.html',
  styleUrls: ['./administrative-clients.component.scss']
})
export class AdministrativeClientsComponent implements OnInit {
  @Output() showTableContent: EventEmitter<number> = new EventEmitter();
  checkedValue: any;

  constructor() { }

  ngOnInit(): void {
  }
  clickedData(){
    this.checkedValue = !this.checkedValue
    this.showTableContent.emit(this.checkedValue)
  }
}
