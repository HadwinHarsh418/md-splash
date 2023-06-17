import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClientAddService } from 'src/app/service/client-add.service';
import { localToastService } from 'src/app/_helpers/services/toaster.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactInfoData !: FormGroup;
  userId: any;
  contactClientInfo:any;
  constructor(private formBuilder:FormBuilder, private clientService:ClientAddService, private activatedRoute:ActivatedRoute, private localToaster:localToastService) {
    this.activatedRoute.params.subscribe(
      res => {
        
        if (res['id']) {
          this.userId =  res['id'];
          
        }
      }
    )
    this.initForm()
    this.getClientContact()
   }

  ngOnInit(): void {
  }
  initForm(){
    this.contactInfoData = this.formBuilder.group({
        PatientTabTwo_ID: 0,
        ID: this.userId,
        PCP_Name: [''],
        PCP_Address: [''],
        PCP_City: [''],
        PCP_State: [''],
        PCP_Zip: [''],
        PCP_Tel: [''],
        PCP_Fax: [''],
        PCP_Note: [''],
        RS_Name: [''],
        RS_Address: [''],
        RS_City: [''],
        RS_State: [''],
        RS_Zip: [''],
        RS_Tel: [''],
        RS_Fax: [''],
        RS_Note: [''],
        EC_Name: [''],
        EC_Address: [''],
        EC_City: [''],
        EC_State: [''],
        EC_Zip: [''],
        EC_Primary_Number: [''],
        EC_Secondary_Number: [''],
        EC_Note: [''],
        PD_Name: [''],
        PD_Email: [''],
        PD_Address: [''],
        PD_City: [''],
        PD_State: [''],
        PD_Zip: [''],
        PD_Tel: [''],
        PD_Fax: [''],
        PD_Notes: [''],
        PG_Name: [''],
        PG_Email: [''],
        PG_Address: [''],
        PG_DOB:[''],
        PG_City: [''],
        PG_State: [''],
        PG_Zip: [''],
        PG_Tel: [''],
        PG_Fax: [''],
        PG_Notes: [''],
    })
  }
  getClientContact(){
    this.clientService.GetClient(this.userId).subscribe((res:any)=>{
      this.contactClientInfo = res.Data
      this.contactInfoData.patchValue({
        PCP_Name:this.contactClientInfo?.PCP_Name,
        PCP_Address:this.contactClientInfo?.PCP_Address,
        PCP_City:this.contactClientInfo.PCP_City,
        PCP_State:this.contactClientInfo.PCP_State,
        PCP_Zip:this.contactClientInfo.PCP_Zip,
        PCP_Tel:this.contactClientInfo.PCP_Tel,
        PCP_Fax:this.contactClientInfo.PCP_Fax,
        PCP_Note:this.contactClientInfo.PCP_Note,
        RS_Name:this.contactClientInfo.RS_Name,
        RS_Address:this.contactClientInfo.RS_Address,
        RS_City:this.contactClientInfo.RS_City,
        RS_State:this.contactClientInfo.RS_State,
        RS_Zip:this.contactClientInfo.RS_Zip,
        RS_Tel:this.contactClientInfo.RS_Tel,
        RS_Fax:this.contactClientInfo.RS_Fax,
        RS_Note:this.contactClientInfo.RS_Note,
        EC_Name:this.contactClientInfo.EC_Name,
        EC_Address:this.contactClientInfo.EC_Address,
        EC_City:this.contactClientInfo.EC_City,
        EC_State:this.contactClientInfo.EC_State,
        EC_Zip:this.contactClientInfo.EC_Zip,
        EC_Primary_Number:this.contactClientInfo.EC_Primary_Number,
        EC_Secondary_Number:this.contactClientInfo.EC_Secondary_Number,
        EC_Note:this.contactClientInfo.EC_Note,
        PD_Name:this.contactClientInfo.PD_Name,
        PD_Email:this.contactClientInfo.PD_Email,
        PD_Address:this.contactClientInfo.PD_Address,
        PD_City:this.contactClientInfo.PD_City,
        PD_State:this.contactClientInfo.PD_State,
        PD_Zip:this.contactClientInfo.PD_Zip,
        PD_Tel:this.contactClientInfo.PD_Tel,
        PD_Fax:this.contactClientInfo.PD_Fax,
        PD_Notes:this.contactClientInfo.PD_Notes,
        PG_Name:this.contactClientInfo.PG_Name,
        PG_Email:this.contactClientInfo.PG_Email,
        PG_Address:this.contactClientInfo.PG_Address,
        PG_DOB:this.contactClientInfo.PG_DOB,
        PG_City:this.contactClientInfo.PG_City,
        PG_State:this.contactClientInfo.PG_State,
        PG_Zip:this.contactClientInfo.PG_Zip,
        PG_Tel:this.contactClientInfo.PG_Tel,
        PG_Fax:this.contactClientInfo.PG_Fax,
        PG_Notes:this.contactClientInfo.PG_Notes,
      })
    })
  }
  submitForm() {
    this.clientService.SaveClientContact(this.contactInfoData.value).subscribe((res:any)=>{
      this.localToaster.presentSuccess(res.Message)
      this.getClientContact()
    },error=>{
      this.localToaster.presentError('Something went wrong please try again')
    })
   }

}
