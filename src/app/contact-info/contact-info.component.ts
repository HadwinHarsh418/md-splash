import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClientAddService } from '../service/client-add.service';
import { localToastService } from '../_helpers/services/toaster.service';
import { Location } from "@angular/common";
import { ContactsService } from '../client/contacts.service';
 

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {
  active = 1;
  contactInfoData !: FormGroup;

  showContent:boolean=false;

  userId:any;
  contactClientInfo:any;
  currentUserId: any;


  constructor(private formBuilder:FormBuilder, private clientService:ClientAddService, private activatedRoute:ActivatedRoute, 
    private localToaster:localToastService,private Location:Location,
    private contactsapi:ContactsService
    ) {
      this.currentUserId = localStorage.getItem('ID');
      
    this.activatedRoute.params.subscribe(
      res => {
        
        if (res['id']) {
          this.userId =  res['id'];
          
        }
      }
    )
   }
   Init(){
    this.contactInfoData=this.formBuilder.group({
      name:['',Validators.required],
      contactperson:[''],
      customersupport:[''],
      city:[''],
      state:[''],
      zip:[''],
      number:[''],
      faxnumber:[''],
      address:[''],
      notes:[''],
    })
   }
   get f(){
    return this.contactInfoData.controls;
   }

  ngOnInit(): void {
    this.Init()
  }
  submitForm() {
    
    if(this.contactInfoData.valid){ 
      
      this.contactsapi.addContact(this.contactInfoData.value).subscribe((result:any=[])=>{ 
      })
    }
    else{
      window.Error('enter valid field')
    }
   }
   back(){
    this.Location.back()
   }
   showContactList(){
    this.contactsapi.getContactsById(this.currentUserId).subscribe((result:any)=>{ 
    })
   }
   

}
