import { Component, OnInit } from '@angular/core';
import { ClientAddService } from 'src/app/service/client-add.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  rows:any=[];
  public tableHeight;
  loadingIndicator:boolean=true;
  constructor(private clientApi:ClientAddService) { }

  ngOnInit(): void {
    this.getNotes()
    
  }
  getNotes(){
    this.loadingIndicator = true;
    this.clientApi.getNotes().subscribe((res:any)=>{
      this.rows = res.Data
      this.loadingIndicator=false;
    },error=>{
    this.loadingIndicator = false;
    })
  }
  

}
