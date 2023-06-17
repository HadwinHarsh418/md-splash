import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mobile-progress-note',
  templateUrl: './mobile-progress-note.component.html',
  styleUrls: ['./mobile-progress-note.component.scss']
})
export class MobileProgressNoteComponent implements OnInit {
  active:any
  constructor(private location:Location) { }

  ngOnInit(): void {
  }
  back(){
    this.location.back()
  }

}
