import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { DatePipe, Location } from '@angular/common';
import { ClientAddService } from 'src/app/service/client-add.service';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-demodraphics-details',
  templateUrl: './demodraphics-details.component.html',
  styleUrls: ['./demodraphics-details.component.scss'],
})
export class DemodraphicsDetailsComponent implements OnInit {
  @Output() GetClientsStatuses: EventEmitter<any> = new EventEmitter();
  demographicDataForm!: FormGroup;
  disabledTab2 = false;
  disabledTab3 = true;
  disabledTab4 = true;
  commercialFieds = true;

  checkValue: any;
  checkValueName: any;
  organization: any;
  private keyUpFxn = new Subject<any>();
  CsmData: any;
  genderData: any;
  getAllMaritialStatus: any;
  GetPregnancyOptions: any;
  GetEmploymentOptions: any;
  GetConsumersMCOOptions: any;
  stateZipValue: any;
  GetDoctors: any;
  GetClinicianManagerOptions: any;
  GetActivePayorsWithDetail: any;
  GetRaceOptions: any;
  GetLivingSituationOptions: any;
  GetHighestEductaionOptions: any;
  GetWarOptions: any;
  GetPrimaryLangOptions: any;
  GetTypeOfPolicyOptions: any;
  GetPolicyHolderOptions: any;
  GetPastArrestOptions: any;
  arr: any;
  frstZip: boolean;
  scndZip: boolean;
  userId: any;
  GetAllData: any;
  editBilling:boolean = true;
  constructor(
    private formBuilder: FormBuilder,
    private localToast: localToastService,
    private apiService:ClientAddService,
    private activatedRoute:ActivatedRoute,
    private location: Location,
    public datePipe:DatePipe
  ) {
    this.activatedRoute.params.subscribe(
      res => {
        
        if (res['id']) {
          this.userId =  res['id'];
          
        }
      }
    )
    this.initForm();
    this.getAllApiData();
    this.getDetailClient();
  }

  ngOnInit(): void {
    this.keyUpFxn.pipe(
      debounceTime(1000)
    ).subscribe(searchTextValue => {
      if (searchTextValue)
        this.onSelectZipGet(searchTextValue);
    });
  }

  initForm() {
    this.demographicDataForm = this.formBuilder.group({
      Id: this.userId ? this.userId : '',
      Last_Name: [''],
      First_Name: [''],
      DOB: [''],
      age: [''],
      Gender: [''],
      Middle_Initials: [''],
      Phone_Home: [''],
      Phone: [''],
      Email: [''],
      Email_Secondary: [''],
      HomeAddressStreet: [''],
      service_Check:[''],
      City: ['', Validators.required],
      State: ['', Validators.required],
      ZipCode: [''],
      Mobile_Phone: [''],
      OtherContact_Phone: [''],
      txtPlus: [''],
      SSN: [''],
      ddlRace: [''],
      Ddl_MaritalStatus:[''],
      txtPreferredName: [''],
      txtEmployer: [''],
      drpSelect: [''], 
      CSM: [''],
      ddl_AssignedTo:[''],
      billingCheck:[''],
      BillingHomeAddressStreet: [''],
      BillingCity: [''],
      BillingState: [''],
      BillingZipCode: [''],
      BillingZipCodePlus: [''],
      radioServices: [''],
      ServiceLocation: [''],
      ConsumerNeeds: ['', Validators.required],
      Employment_details: [''],
      TherapyServices:false,
        Psychiatrist:false,
        PsychiatricRehab:false,
        PRPTherapy:false,
        IOP:false,
        MobileResponse:false,
        TherapyAndPsych:false,
        MobileTreatment:false,
    });
  }

  get f() {
    return this.demographicDataForm.controls;
  }

  getAllApiData(){
    this.apiService.getAllGender().subscribe((res:any)=>{
      this.genderData = res.Data
    })
    this.apiService.getAllMaritialStatus().subscribe((res:any)=>{
      this.getAllMaritialStatus = res.Data
    })
    this.apiService.getAllManager().subscribe((res:any)=>{
      this.CsmData = res.Data
    })
    this.apiService.GetEmploymentOptions().subscribe((res:any)=>{
      this.GetEmploymentOptions = res.Data
    })
    this.apiService.GetRaceOptions().subscribe((res:any)=>{
      this.GetRaceOptions = res.Data
    })
    this.apiService.GetClinicianManagerOptions().subscribe((res:any)=>{
      this.GetClinicianManagerOptions = res.Data
    })
    
  }
  getDetailClient(){
    this.apiService.GetById(this.userId).subscribe((res:any)=>{
      this.GetAllData = res.Data.Ref;
      this.GetClientsStatuses.emit(res.Data) 
      this.mapValue()
    })
  }

  onSelectZipGet(data:any){
    this.apiService.GetStateCityByZip(data).subscribe((res:any)=>{
      this.stateZipValue = res.Data
      this.mapValue()
    })
  }

  mapValue(){
    let date = this.datePipe.transform(this.GetAllData?.DOB ,'YYYY-MM-dd')
    
    this.demographicDataForm.patchValue({
      Last_Name:this.GetAllData?.Last_Name,
      First_Name: this.GetAllData?.First_Name,
      DOB: date,
      HomeAddressStreet: this.GetAllData?.Address ? this.GetAllData?.Address : this.GetAllData?.HomeAddressStreet,
      age: this.GetAllData.age,
      State: this.GetAllData?.State,
      City: this.GetAllData?.City,
      SSN: this.GetAllData.SSN,
      ddlRace: this.GetAllData.ddlRace,
      ZipCode: this.GetAllData.ZipCode,
      Gender: this.GetAllData.Gender,
      Race: this.GetAllData.Race,
      Phone_Home: this.GetAllData.Phone_Home,
      Mobile_Phone: this.GetAllData.Mobile_Phone,
      Phone: this.GetAllData.Phone,
      OtherContact_Phone: this.GetAllData.OtherContact_Phone,
      Email: this.GetAllData.Email,
      Email_Secondary: this.GetAllData.Email_Secondary,
      Middle_Initials:this.GetAllData.Middle_Initials,
      Ddl_MaritalStatus:this.GetAllData.Ddl_MaritalStatus,
      Employment_details:this.GetAllData.Employment_details,
      CSM:this.GetAllData.CSM,
      BillingHomeAddressStreet: this.GetAllData.BillingHomeAddressStreet ,
      BillingCity: this.GetAllData.BillingCity ,
      BillingState: this.GetAllData.BillingState ,
      BillingZipCode: this.GetAllData.BillingZipCode ,
      ConsumerNeeds:this.GetAllData.ConsumerNeeds,
      ddl_AssignedTo:this.GetAllData.Ddl_AssignedTo,
      service_Check:this.GetAllData.service_Check,
      ServiceLocation:this.GetAllData.ServiceLocation


    })
    if(this.GetAllData){
      if(this.GetAllData.TherapyServices){
        this.demographicDataForm.controls['service_Check'].setValue('Outpatient Therapy Services');
      } 
      else if(this.GetAllData.Psychiatrist){
        this.demographicDataForm.controls['service_Check'].setValue('Psychiatric');
      } 
      else if(this.GetAllData.PsychiatricRehab){
        this.demographicDataForm.controls['service_Check'].setValue('Psychiatric Rehabilitation (PRP)');
      }
      else if(this.GetAllData.PRPTherapy){
        this.demographicDataForm.controls['service_Check'].setValue('PRP and Therapy');
      }
      else if(this.GetAllData.MobileTreatment){
        this.demographicDataForm.controls['service_Check'].setValue('Mobile Treatment');
      } 
      else if(this.GetAllData.IOP){
        this.demographicDataForm.controls['service_Check'].setValue('IOP');
      }
      else if(this.GetAllData.TherapyAndPsych){
        this.demographicDataForm.controls['service_Check'].setValue('Therapy and Psychiatric');
      } 
      else if(this.GetAllData.Both){
        this.demographicDataForm.controls['service_Check'].setValue('All');

      }
    }
    
    if(date){
      this.getDate()
    }

    if(this.frstZip == true){
      this.demographicDataForm.patchValue({
        State: this.stateZipValue?.State,
        City: this.stateZipValue?.City,
        
      })
    }
  }

  onSelectZip(){
    this.frstZip = true
  this.keyUpFxn.next(this.demographicDataForm.value.ZipCode)
}


  getDate() {
    var dob = this.demographicDataForm.value.DOB;
    
    let slDt2 = dob.split('-');
    let slDt3 = slDt2.join('');
    var year = Number(slDt3.substr(0, 4));
    var month = Number(slDt3.substr(4, 2)) - 1;
    var day = Number(slDt3.substr(6, 2));
    var today = new Date();
    var age = today.getFullYear() - year;
    if (
      today.getMonth() < month ||
      (today.getMonth() == month && today.getDate() < day)
    ) {
      age--;
    }
    this.demographicDataForm.patchValue({
      age: age,
    });
  }

  submitForm() {
    let Ref :any;
    let PrpRef :any;
    markAllDirty(this.demographicDataForm);
    if (this.demographicDataForm.invalid) {
      this.localToast.presentError('Please fill all required fields');
      return;
    }
    if(this.demographicDataForm.value.service_Check){
      if(this.demographicDataForm.value.service_Check == 'Outpatient Therapy Services'){
        this.demographicDataForm.controls['TherapyServices'].setValue(true);
      } 
      else if(this.demographicDataForm.value.service_Check == 'Psychiatric'){
        this.demographicDataForm.controls['Psychiatrist'].setValue(true);
      } 
      else if(this.demographicDataForm.value.service_Check == 'Psychiatric Rehabilitation (PRP)'){
        this.demographicDataForm.controls['PsychiatricRehab'].setValue(true);
      }
      else if(this.demographicDataForm.value.service_Check == 'PRP and Therapy'){
        this.demographicDataForm.controls['PRPTherapy'].setValue(true);
      }
      else if(this.demographicDataForm.value.service_Check == 'Mobile Treatment'){
        this.demographicDataForm.controls['MobileTreatment'].setValue(true);
      } 
      else if(this.demographicDataForm.value.service_Check == 'IOP'){
        this.demographicDataForm.controls['IOP'].setValue(true);
      }
      else if(this.demographicDataForm.value.service_Check == 'Therapy and Psychiatric'){
        this.demographicDataForm.controls['TherapyAndPsych'].setValue(true);
      } 
      else if(this.demographicDataForm.value.service_Check == 'All'){
        this.demographicDataForm.controls['Both'].setValue(true);

      }

  }
  
    if(this.demographicDataForm.valid) {
      Ref = this.demographicDataForm.value;
    }
    let data = {Ref,  PrpRef }
    this.apiService.saveclient(data).subscribe((res:any) =>{
        this.localToast.presentSuccess(res.Message);
        this.getDetailClient();
    }), error => {
        this.localToast.handleHttpErrorResponse(error);
      }
  }
  back() {
    this.location.back();
  }
  checkAddress(event:any){
    if(this.demographicDataForm.value.billingCheck){
      this.demographicDataForm.controls['BillingHomeAddressStreet'].setValue(this.demographicDataForm.value.HomeAddressStreet)
      this.demographicDataForm.controls['BillingCity'].setValue(this.demographicDataForm.value.City);
      this.demographicDataForm.controls['BillingZipCode'].setValue(this.demographicDataForm.value.ZipCode)
      this.demographicDataForm.controls['BillingState'].setValue(this.demographicDataForm.value.State)

    }else{
      this.demographicDataForm.controls['BillingHomeAddressStreet'].setValue(this.GetAllData.BillingHomeAddressStreetthis ? this.GetAllData.BillingHomeAddressStreetthis : '')
      this.demographicDataForm.controls['BillingCity'].setValue(this.GetAllData.BillingCity ? this.GetAllData?.BillingCity : '');
      this.demographicDataForm.controls['BillingZipCode'].setValue(this.GetAllData.BillingZipCode ? this.GetAllData?.BillingZipCode : '')
      this.demographicDataForm.controls['BillingState'].setValue(this.GetAllData.BillingState ? this.GetAllData?.BillingState : '')

    }
  }
}
