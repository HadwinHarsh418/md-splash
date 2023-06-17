import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent implements OnInit {
  selectedFile:string
  userFile: any;
  imageSrc: any;
  constructor() { }

  ngOnInit(): void {
  }
  readURL(event:any){ 
    this.userFile = event.target.files[0];
    this.selectedFile = this.userFile.name;
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageSrc = e.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }}
  }
