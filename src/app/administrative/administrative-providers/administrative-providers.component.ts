import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-administrative-providers',
  templateUrl: './administrative-providers.component.html',
  styleUrls: ['./administrative-providers.component.scss']
})
export class AdministrativeProvidersComponent implements OnInit {
  @Output() showSideForm: EventEmitter<any> = new EventEmitter();

  checkedValue: boolean;

  constructor() { }

  ngOnInit(): void {
  }
  clickedData(){
    this.checkedValue = !this.checkedValue
    this.showSideForm.emit(this.checkedValue)
  }
  
}
