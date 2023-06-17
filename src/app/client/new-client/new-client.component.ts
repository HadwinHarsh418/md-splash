import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientAddService } from 'src/app/service/client-add.service';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { debounceTime, Subject } from 'rxjs';
import * as moment from 'moment';
import { Location } from '@angular/common';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss']
})
export class NewClientComponent implements OnInit {
  demographicDataForm!: FormGroup;
  medicateDataForm!: FormGroup;
  prpDataForm!: FormGroup;
  commercialDataForm!: FormGroup;
  bilingAddress!: FormGroup;
  disabledTab2 = false;
  disabledTab3 = true;
  disabledTab4 = true;
  commercialFieds = true

  checkValue:any

  active = 1;
  checkValueName: any;
  organization: any;
  CsmData: any;
  genderData: any;
  getAllMaritialStatus: any;
  GetPregnancyOptions: any;
  GetEmploymentOptions: any;
  GetConsumersMCOOptions: any;
  debounceApi = new Subject<any>();
  private keyUpFxn = new Subject<any>();
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

  constructor(private formBuilder: FormBuilder,
    private localToast: localToastService,
    private apiService:ClientAddService,
    private location:Location,
    config: NgbModalConfig, private modalService: NgbModal
  ) {
    this.initForm();
    this.getAllDpwValueTab1()
    this.getAllDpwValueTab2()
    config.backdrop = 'static';
		config.keyboard = false;
   }

  ngOnInit(): void {
    this.keyUpFxn.pipe(
      debounceTime(1000)
    ).subscribe(searchTextValue => {
      if (searchTextValue)
        this.onSelectZipGet(searchTextValue);
    });
  }
  
getDate(){
  var dob = this.demographicDataForm.value.DOB;
  let slDt2 = dob.split('-')
  let slDt3 = slDt2.join('')
  var year = Number(slDt3.substr(0, 4));
  var month = Number(slDt3.substr(4, 2)) - 1;
  var day = Number(slDt3.substr(6, 2));
  var today = new Date();
  var age = today.getFullYear() - year;
if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
  age--;
}
this.demographicDataForm.patchValue({
    age:age
  })
}

  initForm() {
    this.demographicDataForm = this.formBuilder.group(
      {
        Rf_Date: ['', [Validators.required]],
        Callers_Name: ['', [Validators.required]],
        Rf_Phone: ['', [Validators.required]],
        Rf_RelationToConsumer: ['', [Validators.required]],
        CSM: [''],
        TherapyServices:false,
        Psychiatrist:false,
        PsychiatricRehab:false,
        PRPTherapy:false,
        IOP:false,
        MobileResponse:false,
        TherapyAndPsych:false,
        MobileTreatment:false,
        ServiceLocation:[''],
        Rf_Organization: [''],
        Both:'',
        ConsumerNeeds: ['', [Validators.required]],
        Last_Name: ['', [Validators.required]],
        First_Name: ['', [Validators.required]],
        DOB: ['', [Validators.required]],
        age: ['', [Validators.required]],
        Gender: ['', [Validators.required]],
        SSN: [''],
        ddl_MaritalStatus: [''],
        IsPregnant: [''],
        Employment_details: ['1'],
        Employment_School: [''],
        HomeAddressStreet: ['', [Validators.required]],
        Email: [''],
        ZipCode: ['',[Validators.required]],
        State: [''],
        City: [''],
        Email_Secondary: [''],
        Phone_Home: [''],
        Mobile_Phone: [''],
        Phone: [''],
        Phone_Cell: [''],
        // client_method: ['',Validators.required],
        billingCheck:[''],
        BillingZipCode: ['', [Validators.required]],
        BillingState: [''],
        BillingCity: [''],
        insurance_type: [''],
        BillingHomeAddressStreet: ['', [Validators.required]],
        // client_desc: ['', [Validators.required]],
        ParentName: [''],
        ParentTelNumber: [''],
        ParentFaxNumber: [''],
        parentRelationConsumer: [''],
        ddl_AssignedTo: ['',[Validators.required]],
        ddl_DoctorAssigned: [''],
        // client_commercial:[''],
        service_Check:[''],
        // work_check:['', [Validators.required]],
        // add New Organization
        modalAddress:[''],
        modalCity:[''],
        modalState:[''],
        modalZip:[''],
        modalContactPerson:[''],
        CSMmanager:[''],
        modalNotes:[''],
        Notes:[''],
        modalName:[''],
      }
    )
    this.medicateDataForm = this.formBuilder.group({
      ConsumerMCO: [''],
      RepeatSSN: [''],
      InsuranceID: ['', [Validators.required]],
      PayorMedicaid: ['', [Validators.required]],
      client_commercial:[''],
      Payorlevel: [''],
      ConsumerspeakEnglish: [''],
      AttendedSchool_College: [''],
      Whatlanguage: [''],
      ddlRace: ['', [Validators.required]],
      ddl_ConsumerLiving: ['', [Validators.required]],
      // livingSituation: ['', [Validators.required]],
      ddl_EducationLevel: ['', [Validators.required]],
      ddl_War: [''],
      // MedicaidNumber: ['', [Validators.required]],
      ddl_SpeakEnglish: ['', [Validators.required]],
      ddl_GradeCompleted: ['', [Validators.required]],
      ddlNumberofArrest: [''],
      languageCheck:['', [Validators.required]],
      consumerHurricane:['',[Validators.required]],
      consumerVeteran:['',[Validators.required]],
      Consumerdeaf:['',[Validators.required]],
      Consumerblind:['',[Validators.required]],
      ConsumerDifficultyWalking:['',[Validators.required]],
      ConsumerDifficultyDressing :['',[Validators.required]],
      ConsumerDifficultyConcentrating:['',[Validators.required]],
      ConsumerDifficultyErrands:['',[Validators.required]],
      OtherthanEnglish:[''],
      
    })
    this.commercialDataForm = this.formBuilder.group({
      Plan_Name1: ['',Validators.required],
      InsuranceCarrier: ['',Validators.required],
      txtpolicynumber: ['',Validators.required],
      GroupNumber: ['',Validators.required],
      PrimaryTel1: [''],
      IsHurricaneVictim: [''],         
      PrimaryTel2: [''],
      PayorCommericalid: ['',Validators.required],
      PayorlevelCommerical: ['',Validators.required],
      ddlPI_Policy: ['',Validators.required],
      ddlPI_PolicyType: ['',Validators.required],
    })
    this.prpDataForm = this.formBuilder.group({
      AdultMentalHealthIssue : [''],
      ManageCurrentLivingSituation : [''],
      AttendSchoolWithoutSupport : [''],
      UnmanageMentalIllness : [''],
      SupportIndividualRecovery : [''],
    })
  }

  get f() {
    return this.demographicDataForm.controls;
  }

  get g() {
    return this.medicateDataForm.controls;
  }

  get c(){
    return this.commercialDataForm.controls;
  }

  get p() {
    return this.prpDataForm.controls;
  }

  getAllDpwValueTab1(){
    this.apiService.getAllOrganization().subscribe((res:any)=>{
      this.organization = res.Data
    })
    this.apiService.getAllManager().subscribe((res:any)=>{
      this.CsmData = res.Data
    })
    this.apiService.getAllGender().subscribe((res:any)=>{
      this.genderData = res.Data
    })
    this.apiService.getAllMaritialStatus().subscribe((res:any)=>{
      this.getAllMaritialStatus = res.Data
    })
    this.apiService.GetPregnancyOptions().subscribe((res:any)=>{
      this.GetPregnancyOptions = res.Data
    })
    this.apiService.GetEmploymentOptions().subscribe((res:any)=>{
      this.GetEmploymentOptions = res.Data
    })
    this.apiService.GetDoctors().subscribe((res:any)=>{
      this.GetDoctors = res.Data
    })
    this.apiService.GetClinicianManagerOptions().subscribe((res:any)=>{
      this.GetClinicianManagerOptions = res.Data
    })
  }

  getAllDpwValueTab2(){
    this.apiService.GetConsumersMCOOptions().subscribe((res:any)=>{
      this.GetConsumersMCOOptions = res.Data
    })
    this.apiService.GetActivePayorsWithDetail().subscribe((res:any)=>{
      this.GetActivePayorsWithDetail = res.Data
    })
    this.apiService.GetRaceOptions().subscribe((res:any)=>{
      this.GetRaceOptions = res.Data
    })
    this.apiService.GetLivingSituationOptions().subscribe((res:any)=>{
      this.GetLivingSituationOptions = res.Data
    })
    this.apiService.GetHighestEductaionOptions().subscribe((res:any)=>{
      this.GetHighestEductaionOptions = res.Data
    })
    this.apiService.GetWarOptions().subscribe((res:any)=>{
      this.GetWarOptions = res.Data
    })
    this.apiService.GetPrimaryLangOptions().subscribe((res:any)=>{
      this.GetPrimaryLangOptions = res.Data
    })
    this.apiService.GetTypeOfPolicyOptions().subscribe((res:any)=>{
      this.GetTypeOfPolicyOptions = res.Data
    })
    this.apiService.GetPolicyHolderOptions().subscribe((res:any)=>{
      this.GetPolicyHolderOptions = res.Data
    })
    this.apiService.GetPastArrestOptions().subscribe((res:any)=>{
      this.GetPastArrestOptions = res.Data
    })
  }


  onSelectZipGet(data:any){
    this.apiService.GetStateCityByZip(data).subscribe((res:any)=>{
      this.stateZipValue = res.Data 
      
      this.mapValue()
      this.mapValue2()
    })
  }

  mapValue(){
    if(this.frstZip == true){
      this.demographicDataForm.patchValue({
        State: this.stateZipValue?.State,
        City: this.stateZipValue?.City,
        
      })
    }else
    {
      this.demographicDataForm.patchValue({
        BillingState: this.stateZipValue?.State,
        BillingCity: this.stateZipValue?.City,
      })
    }
   
  }
  mapValue2(){
    this.demographicDataForm.patchValue({
      modalState: this.stateZipValue?.State,
      modalCity: this.stateZipValue?.City,
      })
   
  }
  onSelectZip(){
      this.frstZip = true
    this.keyUpFxn.next(this.demographicDataForm.value.ZipCode)
  }


  onSelectZip2(){
    this.frstZip = false
    this.keyUpFxn.next(this.demographicDataForm.value.BillingZipCode)
  }
  onSelectZip3(){
    this.frstZip = false
    this.keyUpFxn.next(this.demographicDataForm.value.modalZip)
  }

  submitForm() {
    let Ref :any;
    let PrpRef :any;
    
    markAllDirty(this.demographicDataForm);
    if (this.demographicDataForm.invalid) {
      this.localToast.presentError('Please fill all required fields on Demographics Tab');
      return;
    }
    markAllDirty(this.medicateDataForm);
    if(this.medicateDataForm.invalid){
      if(this.commercialFieds == false){
        markAllDirty(this.commercialDataForm);
      } 
      this.localToast.presentError('Please fill all required fields on Medicated Tab');
      return;
    }
    // if(this.medicateDataForm.valid) {
    //   Object.assign(Ref, this.medicateDataForm.value)
    // }
    
    markAllDirty(this.commercialDataForm);
    if(this.disabledTab3 == false && this.commercialDataForm.invalid){
      this.localToast.presentError('Please fill all required fields on Commercial Tab');
      return;
    }
    // if(this.commercialDataForm.valid) {
    //   Object.assign(Ref, this.commercialDataForm.value)
    // }


    markAllDirty(this.prpDataForm);
    if(this.disabledTab4 == false && this.prpDataForm.invalid){
      this.localToast.presentError('Please fill all required fields on PRP Tab');
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
      // if(this.demographicDataForm.value.ServiceLocation == true){
      //   this.demographicDataForm.value.ServiceLocation == 1;
      // }else{
      //   this.demographicDataForm.value.ServiceLocation == 2;

      // }

  }
  Ref = this.demographicDataForm.value;
    if(this.prpDataForm.valid) {
      PrpRef = this.prpDataForm.value;
    }

    let data = {Ref,  PrpRef }
    
    this.apiService.saveclient(data).subscribe((res:any) =>{
        this.localToast.presentSuccess(res.Message);
        this.demographicDataForm.reset()
        this.medicateDataForm.reset()
        this.commercialDataForm.reset()
        this.prpDataForm.reset();
        this.active = 1;
    }), error => {
        this.localToast.handleHttpErrorResponse(error);
      }
  }

  CheckedValue(data:any){
    if(this.medicateDataForm.value.client_commercial == 'Medicaid'){
      // this.medicateDataForm.value.Payorlevel = "Primary";
      this.medicateDataForm.patchValue({
        Payorlevel:'1',
      })
    }
    else if(this.medicateDataForm.value.client_commercial != 'Medicaid'){
      this.medicateDataForm.patchValue({
        Payorlevel:''
      })
    }
    if(data.target.value == 'Psychiatric Rehabilitation (PRP)' || data.target.value =='PRP and Therapy')
      this.disabledTab4 = false;
      else if(data.target.value == 'Commercial(Aetna,BCBS,Cigna,etc'){
      this.disabledTab3 = false;
      this.commercialFieds = false;
    }
    else if(data.target.value =='PRP and Therapy')
    this.disabledTab4 = false;
    else if(data.target.value =='Medicaid'){
    this.disabledTab2 = false;
    this.disabledTab3 = true;
    this.commercialFieds = true;

  }
    else{
      this.disabledTab4 = true;
      this.disabledTab3 = true;
    this.commercialFieds = true;
      this.disabledTab2 = false;
    }
  }
  back(){
    this.location.back();
  }
  checkAddress(){
    if(this.demographicDataForm.value.billingCheck){
      this.demographicDataForm.controls['BillingHomeAddressStreet'].setValue(this.demographicDataForm.value.HomeAddressStreet)
      this.demographicDataForm.controls['BillingCity'].setValue(this.demographicDataForm.value.City);
      this.demographicDataForm.controls['BillingZipCode'].setValue(this.demographicDataForm.value.ZipCode)
      this.demographicDataForm.controls['BillingState'].setValue(this.demographicDataForm.value.State)

    }else{
      this.demographicDataForm.controls['BillingHomeAddressStreet'].setValue('')
      this.demographicDataForm.controls['BillingCity'].setValue('');
      this.demographicDataForm.controls['BillingZipCode'].setValue('')
      this.demographicDataForm.controls['BillingState'].setValue('')

    }
  }
  open(content) {
		this.modalService.open(content);
	}
}

