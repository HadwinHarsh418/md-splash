import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss']
})
export class SignatureComponent implements OnInit {
  signaturetransitionform:FormGroup
  details:any;
  pregressNotes: any;
  constructor(private localToast: localToastService,private fb:FormBuilder) {
    this.init()
   }
   init(){
    this.signaturetransitionform=this.fb.group({
      testtest:['']
    })
   }
  ngOnInit(): void {
  }
  Save(){
    markAllDirty(this.pregressNotes);
    if (this.pregressNotes.invalid) {
      this.localToast.presentError('Please fill all required fields');
      return;
    }
    else{
      
    }
  }
}
