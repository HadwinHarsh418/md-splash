import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientAddService } from 'src/app/service/client-add.service';
import { InsuranceServiceService } from 'src/app/service/insurance-service.service';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { InsuranceTabsFormComponent } from '../insurance-tabs-form/insurance-tabs-form.component';
import { PrpAuthFormComponent } from '../prp-auth-form/prp-auth-form.component';
import { MobileAuthFormComponent } from '../mobile-auth-form/mobile-auth-form.component';
import { IopAuthFormComponent } from '../iop-auth-form/iop-auth-form.component';
import { DemodraphicsDetailsComponent } from '../demodraphics-details/demodraphics-details.component';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragHandle} from '@angular/cdk/drag-drop';
import { NotesModuleApiService } from 'src/app/_helpers/services/notes.service';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.scss']
})
export class InsuranceComponent implements OnInit {
@ViewChild(InsuranceTabsFormComponent) insuranceTabsContent:InsuranceTabsFormComponent
@ViewChild(PrpAuthFormComponent) PrpAuthFormComponent:PrpAuthFormComponent
@ViewChild(MobileAuthFormComponent) MobileAuthFormComponent:MobileAuthFormComponent
@ViewChild(IopAuthFormComponent) IopAuthFormComponent:IopAuthFormComponent
@ViewChild(DemodraphicsDetailsComponent) DemodraphicsDetailsComponent:DemodraphicsDetailsComponent
@ViewChild('Table') Table;
@Input() userItem:any;

  profileForm:FormGroup
  loadingIndicator:boolean = false;
  storeClientId:any
  sortDir = 1;
  startFrom: number;
  insuranceForm!: FormGroup;
  GetActivePayorsWithDetail:any;
  isDisabled =true;
  isDisable: boolean = true;
  loading: boolean = false;
  GetPolicyHolderOptions: any;
  SelectedServices:any;
  userId: any;
  active=1;
  insuranceCurrentTab = '1';
  headerTabs = 1;
  actived=1
  rows:any;
  newInsurance = false
  insurancetabs: boolean;
  insuranceAuthorization: boolean = false;
  UnitsSessionsDisable: boolean = true;
  SessionsAuthorization:boolean=true;
  SessionsUsed:boolean=true;
  insuranceData: any;
  body:any;
  checkedValueData: any[] =[];
  AuthorizationTabData:any[]=[]
  SelectedValues: any;
  GetTypeOfPolicyOptions: any;
  authorizationData: any;
  PIT_IsYearly= true;
  previousValue: any;
  file: File;
  profile_pic: string;
  tabData = {
    tab2: null,
    tab3: null,
    tab4: null,
    tab5: null,
  }
  authId: any;
  insuranceExpireDate: string;
  verfiedByCustomerList: any;
  GetClientsStatuses: any;

  row:any[]=[
  { TerminationDate: 1, InsuranceType: 'Hydrogen', PolicyType: 1.0079, Payor: 'H' },
  { TerminationDate: 2, InsuranceType: 'Helium', PolicyType: 4.0026, Payor: 'He' },
  { TerminationDate: 3, InsuranceType: 'Lithium', PolicyType: 6.941, Payor: 'Li' },
  { TerminationDate: 4, InsuranceType: 'Beryllium', PolicyType: 9.0122, Payor: 'Be' },
  { TerminationDate: 5, InsuranceType: 'Boron', PolicyType: 10.811, Payor: 'B' },
  { TerminationDate: 6, InsuranceType: 'Carbon', PolicyType: 12.0107, Payor: 'C' },
  { TerminationDate: 7, InsuranceType: 'Nitrogen', PolicyType: 14.0067, Payor: 'N' },
  { TerminationDate: 8, InsuranceType: 'Oxygen', PolicyType: 15.9994, Payor: 'O' },
  { TerminationDate: 9, InsuranceType: 'Fluorine', PolicyType: 18.9984, Payor: 'F' },
  { TerminationDate: 10, InsuranceType: 'Neon', PolicyType: 20.1797, Payor: 'Ne' },
  ]
  Limit: number;
  paging: any;
  fileToUpload: any;
  url: any ;
  constructor(private modalService: NgbModal,private activatedRoute:ActivatedRoute,private formBuilder: FormBuilder,private localToast: localToastService,private apiService:ClientAddService,
    private clientInsuranceService:InsuranceServiceService,
    private notesApiService:NotesModuleApiService,
     private datePipe:DatePipe,private ref: ChangeDetectorRef   )
    { 
      this.activatedRoute.params.subscribe(
        res => {
          
          if (res['id']) {
            this.userId =  res['id'];
            this.getInsurance()
          }
        }
      )
      this.initForm()
      this.initForm2()
      this.optionValue()
    }

  ngOnInit(): void {
    this.modalService.dismissAll()
    this.getInsurance()
  }
    
  changeTab(tab) {
    if (tab !== this.insuranceCurrentTab) {
      this.insuranceCurrentTab = tab;
      if(this.authorizationData?.IsAuthorizationsReq && this.insuranceCurrentTab !='1'){
       this.getAuthorization()
      }
      if(this.insuranceCurrentTab=='2'){
        this.tabData.tab2 = this.insuranceTabsContent?.AuthorizationsForms.value;
      }
      if(this.insuranceCurrentTab=='3'){
        this.tabData.tab3 = this.PrpAuthFormComponent?.AuthorizationsForms.value;
      }
      if(this.insuranceCurrentTab=='4'){
        this.tabData.tab4 = this.MobileAuthFormComponent?.AuthorizationsForms.value;
      }if(this.insuranceCurrentTab=='5'){
        this.tabData.tab5 = this.IopAuthFormComponent?.AuthorizationsForms.value;
      }
    }
  }
  getDetails(data){
    this.GetClientsStatuses = data
    
  }

  getAuthorization(){
    let body={
      insId: this.authorizationData?.Id,
      authType: this.insuranceCurrentTab == '2' ? 'Therapy' : this.insuranceCurrentTab == '3' ? 'PRP' : this.insuranceCurrentTab == '4' ? 'Mobile' : 'IOP'
    }
    
    this.apiService.GetInsuranceAuthorizations(body).subscribe((res:any)=>{
      this.AuthorizationTabData = res.Data
   })
  }

  createInsurance(){
    if(this.insuranceCurrentTab == '1'){
      this.newInsurance = !this.newInsurance
      this.insurancetabs = false;
      this.insuranceForm.reset()
      this.authorizationData=[]
    }else if(this.newInsurance){
      if(this.insuranceAuthorization){
        switch (this.insuranceCurrentTab) {
          case '2':
            this.insuranceTabsContent.AuthorizationsForms.reset();
          break;
          case '3':
            this.PrpAuthFormComponent.AuthorizationsForms.reset();
          break;
          case '4':
          this.MobileAuthFormComponent.AuthorizationsForms.reset();
          break;
          case '5':
            this.IopAuthFormComponent.AuthorizationsForms.reset();
          break;
        }
        this.insuranceAuthorization = true
      }
      else
      this.insuranceAuthorization = !this.insuranceAuthorization
      this.authId = '';
    }
  }
  initForm2(){
    this.profileForm=this.formBuilder.group({
      NewPhoto:['']
    })
  }

  initForm() {
    this.insuranceForm = this.formBuilder.group(
      {
        // Insurance
        Id: '', 
        InsuranceCarrier: [''],
        Payor: ['',Validators.required],
        PolicyNo: ['',Validators.required],
        PolicyType:[''], 
        Notes: [''],
        GroupNo: [''],
        Telephone: [''],
        Fax: [''],
        Address: [''] ,
        ClaimAddress: [''] ,
        PolicyHolder: ['',Validators.required], 
        EffectiveDate: [''],
        TerminationDate: [''],
        txtPI_DateVerified:[''],
        CoPay: ['',Validators.required], 
        CoInsurance: [''] ,
        NoOfVisitsAllowed: [''],
        DeductibleAmount: [''],
        DeductibleBalance: [''],
        IsInformationRelease: [false],//handle check
        OutOfPocketAmount: ['',Validators.required],
        OutOfPocketBalance: [''],
        VerifiedBy: ['',Validators.required],
        MethodOfVerification: [''] ,
        VerificationDate: [''],
        SpokenWithForVerification: [''] ,
        IsAuthorizationsReq: [''],//handle check
        AuthorizationsReqFrom: [{value: '', disabled: this.isDisabled}] ,
        IsReferralReq: [''],
        ReferralReqFrom: [{value: '', disabled: this.isDisable}] ,
        PreferredOrder: [''],
        InsuranceType: [''] ,
        IsYearlyDeductible: [false],//handle check
        DeletedOn: [''],
        IsDeleted: [false],//handle check
        PIT_Benefits:[''],
        PIT_IsYearly: [false],
        PIT_IsContract: [''],
        
      }
    )
  }

  getInsurance(){
    this.loadingIndicator = true
    this.apiService.GetInsurance(this.userId).subscribe((res:any)=>{
      this.insuranceData = res.Data 
      this.loadingIndicator = false;  
      this.getDetails(res.Data)
    })
      
  }

  optionValue(){
    this.apiService.GetActivePayorsWithDetail().subscribe((res:any)=>{
      this.GetActivePayorsWithDetail = res.Data
    })
    this.apiService.GetPolicyHolderOptions().subscribe((res:any)=>{
      this.GetPolicyHolderOptions = res.Data
    })
    this.apiService.GetTypeOfPolicyOptions().subscribe((res:any)=>{
      this.GetTypeOfPolicyOptions = res.Data
    })
    this.apiService.verfiedByCustomerList().subscribe((res:any)=>{
      this.verfiedByCustomerList = res.Data
    })
  }
  get f() {
    return this.insuranceForm.controls;
  }

  submitForm(){
    markAllDirty(this.insuranceForm);

    if(this.insuranceForm.invalid && this.insuranceCurrentTab == '1'){
      return;
    }
    let body = {
        Id: this.authorizationData?.Id ? this.authorizationData?.Id : '',
        FkClientId:parseInt(this.userId),
        InsuranceCarrier: this.insuranceForm.value.InsuranceCarrier,
        Payor: parseInt(this.insuranceForm.value.Payor),
        PolicyNo: this.insuranceForm.value.PolicyNo,
        PolicyType: parseInt(this.insuranceForm.value.PolicyType),
        Notes: this.insuranceForm.value.Notes,
        GroupNo: this.insuranceForm.value.GroupNo,
        Telephone: this.insuranceForm.value.Telephone,
        Fax: this.insuranceForm.value.Fax,
        Address: this.insuranceForm.value.Address,
        ClaimAddress: this.insuranceForm.value.ClaimAddress,
        PolicyHolder: parseInt(this.insuranceForm.value.PolicyHolder),
        EffectiveDate: this.insuranceForm.value.EffectiveDate,
        TerminationDate: this.insuranceForm.value.TerminationDate,
        CoPay: this.insuranceForm.value.CoPay,
        CoInsurance: this.insuranceForm.value .CoInsurance,
        NoOfVisitsAllowed: parseInt(this.insuranceForm.value.NoOfVisitsAllowed),
        DeductibleAmount: parseInt(this.insuranceForm.value.DeductibleAmount),
        DeductibleBalance: parseInt(this.insuranceForm.value.DeductibleBalance),
        IsInformationRelease: this.insuranceForm.value.IsInformationRelease == '0' ? true : false,
        OutOfPocketAmount: parseInt(this.insuranceForm.value.OutOfPocketAmount),
        OutOfPocketBalance: parseInt(this.insuranceForm.value.OutOfPocketBalance),
        VerifiedBy: parseInt(this.insuranceForm.value.VerifiedBy),
        MethodOfVerification: this.insuranceForm.value.MethodOfVerification,
        VerificationDate: this.insuranceForm.value.VerificationDate,
        SpokenWithForVerification: this.insuranceForm.value .SpokenWithForVerification,
        IsAuthorizationsReq: this.insuranceForm.value.IsAuthorizationsReq == '0' ? true : false,
        AuthorizationsReqFrom: this.insuranceForm.value.AuthorizationsReqFrom,
        IsReferralReq: this.insuranceForm.value.IsReferralReq == '0' ? true : false,
        ReferralReqFrom: this.insuranceForm.value.ReferralReqFrom,
        PreferredOrder: this.insuranceData?.length + 1,
        InsuranceType: this.insuranceForm.value.InsuranceType,
        IsYearlyDeductible: this.insuranceForm.value.IsYearlyDeductible,
        DeletedOn: this.insuranceForm.value.DeletedOn,
        IsDeleted: this.insuranceForm.value.IsDeleted,
        PIT_Benefits:this.insuranceForm.value.PIT_Benefits,
        PIT_IsYearly:this.insuranceForm.value.PIT_IsYearly,
        PIT_IsContract:this.insuranceForm.value.PIT_IsContract,
        // authorization Tab
    }
    this.loading=true;
    this.clientInsuranceService.AddInsurance(body).subscribe((res:any)=>{
      if(res.Status == 'OK'){
        this.loading=false;
        this.localToast.presentSuccess(res.Message)
        this.insuranceForm.reset();
        this.insurancetabs = false;
        this.newInsurance= false
        this.getInsurance()
        this.insuranceCurrentTab = '1';
      }
    },()=>{
      this.loading=false;
      this.localToast.presentSuccess('Something went wrong Please try again later.')
    })
  }
  back(){
    if(this.insuranceCurrentTab == '1'){
      this.newInsurance = !this.newInsurance
      this.insurancetabs = false;
    }
    if(this.insuranceCurrentTab == '2' || this.insuranceCurrentTab == '3' || this.insuranceCurrentTab == '4' || this.insuranceCurrentTab == '5'){
      
      if(this.insuranceAuthorization == false){
        this.newInsurance = !this.newInsurance
        this.insurancetabs = false;
        this.insuranceCurrentTab = '1'
      }else{
        this.insuranceAuthorization = false;
      }
    }
  }
  chnageValue(data){
    if (data.target.value == '0') {
      this.insuranceForm.get('AuthorizationsReqFrom').enable();
      this.isDisabled = false;
      
    } else{
      this.insuranceForm.get('AuthorizationsReqFrom').disable();
      this.insuranceForm.controls['AuthorizationsReqFrom'].setValue('');
      this.isDisabled = true;
    }

  }
  onSelectionChanged(value:any) {
    if (value.target.value == '0') {
      if(this.authorizationData?.IsAuthorizationsReq || this.authorizationData?.Id){
        this.insurancetabs = true
      }
      this.insuranceForm.controls['ReferralReqFrom'].enable();
      this.isDisable = false;
    } else {
      this.insuranceForm.controls['ReferralReqFrom'].disable();
      this.insuranceForm.controls['ReferralReqFrom'].setValue('');

      this.isDisable = true;
      this.insurancetabs = false

    }
  }

  opneInsurance(data:any){
    this.apiService.GetInsuranceById(data.Id).subscribe((res:any)=>{
      this.authorizationData = res.Data
      this.insuranceExpireDate = this.datePipe.transform(this.authorizationData?.TerminationDate ,'YYYY-MM-dd')
      this.newInsurance=true; 
      this.mapValue()
      if(this.authorizationData?.IsAuthorizationsReq){
        this.insuranceForm.controls['ReferralReqFrom'].enable();
        this.isDisable = false;
        this.insurancetabs = true
      }
    })
  }
  mapValue(){
    this.insuranceForm.patchValue({
      Id:this.authorizationData?.Id ,
      InsuranceCarrier:this.authorizationData?.InsuranceCarrier,
      Payor:this.authorizationData?.Payor,
      PolicyNo:this.authorizationData?.PolicyNo,
      PolicyType:this.authorizationData?.PolicyType,
      Notes:this.authorizationData?.Notes,
      GroupNo:this.authorizationData?.GroupNo,
      Telephone:this.authorizationData?.Telephone,
      Fax:this.authorizationData?.Fax,
      Address:this.authorizationData?.Address,
      ClaimAddress:this.authorizationData?.ClaimAddress,
      PolicyHolder:this.authorizationData?.PolicyHolder ,
      EffectiveDate:this.datePipe.transform(this.authorizationData?.EffectiveDate ,'YYYY-MM-dd'),
      TerminationDate:this.datePipe.transform(this.authorizationData?.TerminationDate ,'YYYY-MM-dd'),
      CoPay:this.authorizationData?.CoPay,
      CoInsurance:this.authorizationData?.CoInsurance,
      NoOfVisitsAllowed:this.authorizationData?.NoOfVisitsAllowed,
      DeductibleAmount:this.authorizationData?.DeductibleAmount,
      DeductibleBalance:this.authorizationData?.DeductibleBalance,
      IsInformationRelease:this.authorizationData?.IsInformationRelease == false ? '1' : '0',
      OutOfPocketAmount:this.authorizationData?.OutOfPocketAmount,
      OutOfPocketBalance:this.authorizationData?.OutOfPocketBalance,
      VerifiedBy:this.authorizationData?.VerifiedBy,
      MethodOfVerification:this.authorizationData?.MethodOfVerification,
      VerificationDate:this.datePipe.transform(this.authorizationData?.VerificationDate ,'YYYY-MM-dd'),
      SpokenWithForVerification:this.authorizationData?.SpokenWithForVerification,
      IsAuthorizationsReq:this.authorizationData?.IsAuthorizationsReq == false ? '1' : '0',
      AuthorizationsReqFrom:this.authorizationData?.AuthorizationsReqFrom,
      IsReferralReq:this.authorizationData?.IsReferralReq == false ? '1' : '0',
      ReferralReqFrom:this.authorizationData?.ReferralReqFrom,
      PreferredOrder:this.authorizationData?.PreferredOrder,
      InsuranceType:this.authorizationData?.InsuranceType,
      IsYearlyDeductible:this.authorizationData?.IsYearlyDeductiblek,
      DeletedOn:this.authorizationData?.DeletedOn,
      IsDeleted:this.authorizationData?.IsDeletedk,
      PIT_Benefits:this.authorizationData?.PIT_Benefits,
      PIT_IsYearly:(/true/i).test(this.authorizationData?.PIT_IsYearly),
      PIT_IsContract:(/true/i).test(this.authorizationData?.PIT_IsContract),
      surancePolicy:this.authorizationData?.surancePolicy,
      
    })
  }
AddAuthorization(){
  if(this.insuranceCurrentTab == '2'){
    this.body={
      Id: this.authId || '',
      Fk_InsId: this.authorizationData?.Id ?? '',
      InsurancePolicy: this.insuranceTabsContent?.AuthorizationsForms.value.InsurancePolicy,
      AuthNo: this.insuranceTabsContent?.AuthorizationsForms.value.AuthNo,
      AuthType: this.insuranceCurrentTab == '2' ? 'Therapy' : this.insuranceCurrentTab == '3' ? 'PRP' : this.insuranceCurrentTab == '4'? 'Mobile' : this.insuranceCurrentTab == '4'? 'Authorization' :'',
      StartDate: this.insuranceTabsContent?.AuthorizationsForms.value.StartDate,
      EndDate: this.insuranceTabsContent?.AuthorizationsForms.value.EndDate,
      IsVisitInUnitsSessions:this.insuranceTabsContent?.AuthorizationsForms.value.IsVisitInUnitsSessions,
      UnitsSessionsAuthorized: this.insuranceTabsContent?.AuthorizationsForms.value.UnitsSessionsAuthorized,
      UnitSessionsUsed: this.insuranceTabsContent?.AuthorizationsForms.value.UnitSessionsUsed,
      IsVisitDays: this.insuranceTabsContent?.AuthorizationsForms.value.IsVisitDays,
      DaysAuthorized:this.insuranceTabsContent?.AuthorizationsForms.value.DaysAuthorized,
      DaysUsed: this.insuranceTabsContent?.AuthorizationsForms.value.DaysUsed,
      IsVisitAmount: this.insuranceTabsContent?.AuthorizationsForms.value.IsVisitAmount,
      VisitAmountAuthorized:this.insuranceTabsContent?.AuthorizationsForms.value.VisitAmountAuthorized,
      VisitAmountUsed: this.insuranceTabsContent?.AuthorizationsForms.value.VisitAmountUsed,
      SelectedServices: this.insuranceTabsContent?.AuthorizationsForms.value.SelectedServices,
      NumberRemaining: this.insuranceTabsContent?.AuthorizationsForms.value.NumberRemaining,
      Status: this.insuranceTabsContent?.AuthorizationsForms.value.Status,
      CreatedBy: this.insuranceTabsContent?.AuthorizationsForms.value.CreatedBy,
      InsuranceLevel:0,
  }
  }else if(this.insuranceCurrentTab == '3'){
    this.body={
      Id: this.authId || '',
      Fk_InsId: this.authorizationData?.Id ?? '',
      InsurancePolicy: this.PrpAuthFormComponent?.AuthorizationsForms.value.InsurancePolicy,
      AuthNo: this.PrpAuthFormComponent?.AuthorizationsForms.value.AuthNo,
      AuthType: 'PRP',
      StartDate: this.PrpAuthFormComponent?.AuthorizationsForms.value.StartDate,
      EndDate: this.PrpAuthFormComponent?.AuthorizationsForms.value.EndDate,
      IsVisitInUnitsSessions:this.PrpAuthFormComponent?.AuthorizationsForms.value.IsVisitInUnitsSessions,
      UnitsSessionsAuthorized: this.PrpAuthFormComponent?.AuthorizationsForms.value.UnitsSessionsAuthorized,
      UnitSessionsUsed: this.PrpAuthFormComponent?.AuthorizationsForms.value.UnitSessionsUsed,
      IsVisitDays: this.PrpAuthFormComponent?.AuthorizationsForms.value.IsVisitDays,
      DaysAuthorized:this.PrpAuthFormComponent?.AuthorizationsForms.value.DaysAuthorized,
      DaysUsed: this.PrpAuthFormComponent?.AuthorizationsForms.value.DaysUsed,
      IsVisitAmount: this.PrpAuthFormComponent?.AuthorizationsForms.value.IsVisitAmount,
      VisitAmountAuthorized:this.PrpAuthFormComponent?.AuthorizationsForms.value.VisitAmountAuthorized,
      VisitAmountUsed: this.PrpAuthFormComponent?.AuthorizationsForms.value.VisitAmountUsed,
      SelectedServices: this.PrpAuthFormComponent?.AuthorizationsForms.value.SelectedServices,
      NumberRemaining: this.PrpAuthFormComponent?.AuthorizationsForms.value.NumberRemaining,
      Status: this.PrpAuthFormComponent?.AuthorizationsForms.value.Status,
      CreatedBy: this.PrpAuthFormComponent?.AuthorizationsForms.value.CreatedBy,
      InsuranceLevel:0,
  }
  }else if(this.insuranceCurrentTab == '4'){
    this.body={
      Id: this.authId || '',
      Fk_InsId: this.authorizationData?.Id ?? '',
      InsurancePolicy: this.MobileAuthFormComponent?.AuthorizationsForms.value.InsurancePolicy,
      AuthNo: this.MobileAuthFormComponent?.AuthorizationsForms.value.AuthNo,
      AuthType: 'Mobile',
      StartDate: this.MobileAuthFormComponent?.AuthorizationsForms.value.StartDate,
      EndDate: this.MobileAuthFormComponent?.AuthorizationsForms.value.EndDate,
      IsVisitInUnitsSessions:this.MobileAuthFormComponent?.AuthorizationsForms.value.IsVisitInUnitsSessions,
      UnitsSessionsAuthorized: this.MobileAuthFormComponent?.AuthorizationsForms.value.UnitsSessionsAuthorized,
      UnitSessionsUsed: this.MobileAuthFormComponent?.AuthorizationsForms.value.UnitSessionsUsed,
      IsVisitDays: this.MobileAuthFormComponent?.AuthorizationsForms.value.IsVisitDays,
      DaysAuthorized:this.MobileAuthFormComponent?.AuthorizationsForms.value.DaysAuthorized,
      DaysUsed: this.MobileAuthFormComponent?.AuthorizationsForms.value.DaysUsed,
      IsVisitAmount: this.MobileAuthFormComponent?.AuthorizationsForms.value.IsVisitAmount,
      VisitAmountAuthorized:this.MobileAuthFormComponent?.AuthorizationsForms.value.VisitAmountAuthorized,
      VisitAmountUsed: this.MobileAuthFormComponent?.AuthorizationsForms.value.VisitAmountUsed,
      SelectedServices: this.MobileAuthFormComponent?.AuthorizationsForms.value.SelectedServices,
      NumberRemaining: this.MobileAuthFormComponent?.AuthorizationsForms.value.NumberRemaining,
      Status: this.MobileAuthFormComponent?.AuthorizationsForms.value.Status,
      CreatedBy: this.MobileAuthFormComponent?.AuthorizationsForms.value.CreatedBy,
      InsuranceLevel:0,
  }
  }if(this.insuranceCurrentTab == '5'){
    this.body={
      Id: this.authId || '',
      Fk_InsId: this.authorizationData?.Id ?? '',
      InsurancePolicy: this.IopAuthFormComponent?.AuthorizationsForms.value.InsurancePolicy,
      AuthNo: this.IopAuthFormComponent?.AuthorizationsForms.value.AuthNo,
      AuthType: 'IOP',
      StartDate: this.IopAuthFormComponent?.AuthorizationsForms.value.StartDate,
      EndDate: this.IopAuthFormComponent?.AuthorizationsForms.value.EndDate,
      IsVisitInUnitsSessions:this.IopAuthFormComponent?.AuthorizationsForms.value.IsVisitInUnitsSessions,
      UnitsSessionsAuthorized: this.IopAuthFormComponent?.AuthorizationsForms.value.UnitsSessionsAuthorized,
      UnitSessionsUsed: this.IopAuthFormComponent?.AuthorizationsForms.value.UnitSessionsUsed,
      IsVisitDays: this.IopAuthFormComponent?.AuthorizationsForms.value.IsVisitDays,
      DaysAuthorized:this.IopAuthFormComponent?.AuthorizationsForms.value.DaysAuthorized,
      DaysUsed: this.IopAuthFormComponent?.AuthorizationsForms.value.DaysUsed,
      IsVisitAmount: this.IopAuthFormComponent?.AuthorizationsForms.value.IsVisitAmount,
      VisitAmountAuthorized:this.IopAuthFormComponent?.AuthorizationsForms.value.VisitAmountAuthorized,
      VisitAmountUsed: this.IopAuthFormComponent?.AuthorizationsForms.value.VisitAmountUsed,
      SelectedServices: this.IopAuthFormComponent?.AuthorizationsForms.value.SelectedServices,
      NumberRemaining: this.IopAuthFormComponent?.AuthorizationsForms.value.NumberRemaining,
      Status: this.IopAuthFormComponent?.AuthorizationsForms.value.Status,
      CreatedBy: this.IopAuthFormComponent?.AuthorizationsForms.value.CreatedBy,
      InsuranceLevel:0,
  }
}
this.loading= true;
  this.clientInsuranceService.AddAuthorizations(this.body).subscribe((res:any)=>{
    if(res.Message == 'Insurance authorization not saved'){
      this.localToast.presentError(res.Message)
    }else{
      switch (parseInt(this.insuranceCurrentTab)) {
        case 2:
          this.insuranceTabsContent.AuthorizationsForms.reset();
        break;
        case 3:
          this.PrpAuthFormComponent.AuthorizationsForms.reset();
        break;
        case 4:
        this.MobileAuthFormComponent.AuthorizationsForms.reset();
        break;
        case 5:
          this.IopAuthFormComponent.AuthorizationsForms.reset();
        break;
      }
          this.insuranceAuthorization= false
          this.getAuthorization()
    }
        this.loading= false;
    
  },()=>{
    this.localToast.presentSuccess('Something went wrong please try again later')
    this.loading= false;

  })
}
  checkValueBtn(data){
    this.insuranceForm.value.PIT_IsYearly = data.target.checked
  }
  opneAuthorization(data){
    this.insuranceAuthorization = false
    this.authId = data.Id
    this.apiService.GetInsuranceAuthorizationsById(data.Id).subscribe((res:any)=>{
      switch (parseInt(this.insuranceCurrentTab)) {
        case 2:
          this.tabData.tab2 = res.Data;
        break;
        case 3:
          this.tabData.tab3 = res.Data;
        break;
        case 4:
          this.tabData.tab4 = res.Data;
        break;
        case 5:
         this.tabData.tab5 = res.Data;
        break;
      }
      this.insuranceAuthorization = true 
    })

  }
  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.insuranceData, event.previousIndex, event.currentIndex); 
  }
  
  onSortClick(event) {
    let target = event.currentTarget,
      classList = target.classList; 
      

    if (classList.contains('fa-chevron-up')) {
      classList.remove('fa-chevron-up');
      classList.add('fa-chevron-down');
      this.sortDir=-1;
    } else {
      classList.add('fa-chevron-up');
      classList.remove('fa-chevron-down');
      this.sortDir=1;
    }
    this.sortArr('InsuranceType');
  }

  sortArr(colName:any){
    this.insuranceData.sort((a,b)=>{
      a= a[colName].toLowerCase();
      b= b[colName].toLowerCase();
      return a.localeCompare(b) * this.sortDir;
    });
  }
  pageChanged(e) {
    this.startFrom = null;
    this.startFrom = (e - 1) * this.Limit;
    this.paging.pageNumber = e-1;
    // this.getDataGridTab1();
  }
 
  onSelectFile(event) { 

    // for base64

    // const formData = new FormData();
    // if (event.target.files[0]) {
    //   var reader = new FileReader();

    //   reader.readAsDataURL(event.target.files[0]); // read file as data url

    //   reader.onload  = (event:any) => {  
        
    //     this.uploadPic(reader.result)
    //   }
      
    // }

    // For binary 

    let file = event.target.files[0];
    this.uploadPic(file)
  }
  uploadPic(data:any){
    const formData= new FormData();
    formData.append('profilePic',data);
      this.notesApiService.UploadClientPic(this.storeClientId.id, formData).subscribe((result:any)=>{
      })
  }

}

