import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/_helpers/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent implements OnInit {
  pregressNotes:FormGroup


  StartTimer:any
  EndTime1:any
  userId: any;
  TotalTimer:any
  
  rows:any[]=[];
  GetAssignedClinicians: any[]=[];
  GetAssignedDoctors: any[]=[];
  GetIOPAssignments: any[]=[];
  GetMobileAssignment: any[]=[];
  GetMobileResAssignments: any[]=[];
  GetPrpPreviousAssignments: any[]=[];


  isDisable: boolean = true;
  ShowClinican:boolean=false;
  ShowDOCTOR:boolean=false;
  ShowPRP:boolean=false;
  ShowMobile:boolean=false;
  ShowIOP:boolean=false;
  ShowMobileRes:boolean=false;
  loading:boolean=false;
  loadingIndicator:boolean=true

 




    constructor(private formBuilder:FormBuilder,private localToast: localToastService,
      private location:Location,private apiService: ApiService,
      private activatedRoute:ActivatedRoute) { 
      this.activatedRoute.params.subscribe(
        res => {
          
          if (res['id']) {
            this.userId =  res['id'];
            
          }
        }
      )
      this.getDetailsOfTabs()
    }


  ngOnInit(): void {
    this.init();
  }

  init(){
    this.pregressNotes =this.formBuilder.group({
      Axis:[''],
      Description:[''],
      CurrentlyAssignedto:[''],
      assignedto:[''],
      AssignedType:[' '],
      AssignedDate:[''],
      assignedto2:[''],
      AssignedType2:[''],
      AssignedDate2:[''],
      CurrentlyAssignedTodoctor:['']
    })
  }
  formValueChange(data){
      this.ShowClinican = false;
      this.ShowDOCTOR=false;
      this.ShowPRP=false;
      this.ShowMobile=false;
      this.ShowIOP=false;
      this.ShowMobileRes=false;
    if(this.ShowClinican ||  data =='ShowClinican'){
      this.ShowClinican = true;
      this.ShowDOCTOR=false;
      this.ShowPRP=false;
      this.ShowMobile=false;
      this.ShowIOP=false;
      this.ShowMobileRes=false;
    }else if(this.ShowDOCTOR ||  data =='ShowDOCTOR'){
      this.ShowDOCTOR = true;
      this.ShowClinican=false;
      this.ShowPRP=false;
      this.ShowMobile=false;
      this.ShowIOP=false;
      this.ShowMobileRes=false;

    }else if(this.ShowPRP ||  data =='ShowPRP'){
      this.ShowPRP = true;
      this.ShowClinican=false;
      this.ShowDOCTOR=false;
      this.ShowMobile=false;
      this.ShowIOP=false;
      this.ShowMobileRes=false;
    }else if(this.ShowMobile ||  data =='ShowMobile'){
      this.ShowMobile = true;
      this.ShowClinican=false;
      this.ShowDOCTOR=false;
      this.ShowPRP=false;
      this.ShowIOP=false;
      this.ShowMobileRes=false;
    }else if(this.ShowIOP ||  data =='ShowIOP'){
      this.ShowIOP = true;
      this.ShowClinican=false;
      this.ShowDOCTOR=false;
      this.ShowPRP=false;
      this.ShowMobile=false;
      this.ShowMobileRes=false;
    }
    else if(this.ShowMobileRes ||  data =='ShowMobileRes'){
      this.ShowMobileRes=true;
      this.ShowClinican=false;
      this.ShowDOCTOR=false;
      this.ShowPRP=false;
      this.ShowMobile=false;
      this.ShowIOP=false;
    }
    this.pregressNotes.reset()

  }

 get genForm(){
    return this.pregressNotes.controls;
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
  getDetailsOfTabs(){
    this.apiService.GetAssignedClinicians(this.userId).subscribe((res:any)=>{
      this.GetAssignedClinicians = res.Data;
    })
    this.apiService.GetAssignedDoctors(this.userId).subscribe((res:any)=>{
      this.GetAssignedDoctors = res.Data;
    })
    this.apiService.GetIOPAssignments(this.userId).subscribe((res:any)=>{
      this.GetIOPAssignments = res.Data;
    })
    this.apiService.GetMobileAssignment(this.userId).subscribe((res:any)=>{
      this.GetMobileAssignment = res.Data;
    })
    this.apiService.GetMobileResAssignments(this.userId).subscribe((res:any)=>{
      this.GetMobileResAssignments = res.Data;
    })
    this.apiService.GetPRPAssignments(this.userId).subscribe((res:any)=>{
      this.GetPrpPreviousAssignments = res.Data;
    })
    this.loadingIndicator = false;
  }

  back(){
    this.location.back();
  }

  onsave(){
    this.loading = true;
    let data={
      "Id": '',
      "ClientId": this.userId,
      "CurrentAssignName": this.pregressNotes.value.CurrentlyAssignedto,
      "AssignToId": this.pregressNotes.value.assignedto,
      "AssignmentType": this.pregressNotes.value.AssignedType,
      "AssignmentDate": this.pregressNotes.value.AssignedDate,
      "CreatedDate": ""
    }
    if(this.ShowClinican){
      this.apiService.SaveAssignedClinician(data).subscribe((res:any)=>{
       
        this.loading = false;
      })
    }else if(this.ShowDOCTOR){
      this.apiService.SaveAssignedClinician(data).subscribe((res:any)=>{
       
    this.loading = false;
      })
    }else if(this.ShowPRP){
      this.apiService.SavePRPClinician(data).subscribe((res:any)=>{
       
    this.loading = false;

      })
    }else if(this.ShowMobile){
      this.apiService.SaveMobileClinician(data).subscribe((res:any)=>{
       
    this.loading = false;

      })
    }else if(this.ShowIOP){
      this.apiService.SaveIOPClinician(data).subscribe((res:any)=>{
       
    this.loading = false;

      })
    }else if(this.ShowMobileRes){
      this.apiService.SaveMobileResClinician(data).subscribe((res:any)=>{
       
    this.loading = false;

      })
    }
  }

  CliniciandeleteItem(data){
    this.apiService.DeleteAssignedClinicians(data.Id).subscribe((res:any)=>{
    
    })
  }
  DoctordeleteItem(data){
    this.apiService.DeleteAssignedDoctors(data.Id).subscribe((res:any)=>{
    
    })
  }
  PRPdeleteItem(data){
    this.apiService.DeletePrpPreviousAssignments(data.Id).subscribe((res:any)=>{
    
    })
  }
  MobileCliniciandeleteItem(data){
    this.apiService.DeleteMobileAssignment(data.Id).subscribe((res:any)=>{
    
    })
  }
  IopdeleteItem(data){
    this.apiService.DeleteIOPAssignments(data.Id).subscribe((res:any)=>{
    
    })
  }
  MobileResdeleteItem(data){
    this.apiService.DeleteMobileResAssignments(data.Id).subscribe((res:any)=>{
    
    })
  }

}
