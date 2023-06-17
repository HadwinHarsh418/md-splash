import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-management-progress-note',
  templateUrl: './management-progress-note.component.html',
  styleUrls: ['./management-progress-note.component.scss']
})
export class ManagementProgressNoteComponent implements OnInit {

  active: any;

  
  constructor(private formBuilder: FormBuilder,private location:Location) { }

  ngOnInit(): void {
  }
  back(){
    this.location.back()
  }
  
}
