import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {
  active = 1;
  newmail:boolean=false;
  constructor() {
    this.active = 1;
   }
   composeNewMail(){
    this.newmail=!this.newmail
    
   }

  ngOnInit(): void {
  }

}
