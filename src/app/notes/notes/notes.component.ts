import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

import { NotesModuleApiService } from 'src/app/_helpers/services/notes.service';
import { debounceTime, Subject } from 'rxjs';
import { AuthenticationService } from 'src/app/_helpers/auth/authentication.service';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})

export class NotesComponent implements OnInit {
  imagesrc = `/assets/images/arrow-image.png`;
  show: boolean = true;
  tetete:any;
  show1: boolean = false;
  private keyUpFxn = new Subject<any>();
  currentUser: any;
  showUserDetails: boolean;
  UserDetails: any;
  clickedUser:any
  clientMemo:any
  storeClientId:any
  showStatus:boolean=false
  currentUserId: any;
  getByclient: any;
  clientId: any;
  clientName:string=''


  constructor(private _location:Location,private notesApiService:NotesModuleApiService,
    private route:Router,
    private authService: AuthenticationService,private localToaste:localToastService) {
      
      this.authService.currentUser.subscribe((res:any)=>{
        this.currentUser=res
        
      })
    this.keyUpFxn.pipe(
      debounceTime(1000)
    ).subscribe((searchTextValue:any) => {
      if (searchTextValue)
      this.searchApi(searchTextValue);
    });
   }

  ngOnInit(): void {}

  backClicked() {
    this._location.back();
  }
  searchValue(data:any){
    this.keyUpFxn.next(data.target.value);
  }
  searchApi(data:any){
    let body={
      "UserId":this.currentUser.Id,
      "UserRole":this.currentUser.Roles[0],
      "SearchText":data
    }
    
    this.notesApiService.searchClient(body).subscribe((res:any)=>{
      if(res.Data.length){
        this.showUserDetails = true;
        this.clientId=res.Data.ClientId
        this.UserDetails=res.Data
        
      }else{
        this.UserDetails = [{FirstName:'No record found'}];
        this.showUserDetails = true;

      }
      
    },err=>{
      this.localToaste.handleHttpErrorResponse('Something went wrong Try again')
    })
  }

  onClickTab(){
    alert('No Document Available')
  
  }
  onClientClick(item:any){
    if(item.FirstName == 'No record found'){
      return;
    }
    this.clientName = `${item.FirstName} ${item.LastName}`
    this.showUserDetails=false
    this.storeClientId=item.ClientId
    this.showStatus=true
    this.notesApiService.ClientGeneralDetails(item.ClientId).subscribe((result:any=[])=>{
      this.clickedUser=result.Data
    })
    // this.notesApiService.MemoDocument(item.ClientId).subscribe((result:any)=>{ 
    //   this.clientMemo=result.Version
    // })
    // this.notesApiService.ClientLockDocument(item.ClientId).subscribe((result:any)=>{ 
    // })
    
    this.notesApiService.getByClient(item.ClientId).subscribe((result:any)=>{
      this.getByclient=result.Data
      
    })
  
   }
   navigate(){
    this.route.navigate(['/insurance/',this.storeClientId])
   }
   
  }


