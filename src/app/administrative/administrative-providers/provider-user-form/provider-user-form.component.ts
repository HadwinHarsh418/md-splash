import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-provider-user-form',
  templateUrl: './provider-user-form.component.html',
  styleUrls: ['./provider-user-form.component.scss']
})
export class ProviderUserFormComponent implements OnInit {
  imageSrc: any;

  constructor() { }

  ngOnInit(): void {
  }

  readURL(event:any){ 
    let userFile = event.target.files[0];
    let selectedFile = userFile.name;
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageSrc = e.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }}


}
