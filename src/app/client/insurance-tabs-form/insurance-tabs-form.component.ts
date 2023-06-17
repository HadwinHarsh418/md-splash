import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ClientAddService } from 'src/app/service/client-add.service';
import { InsuranceComponent } from '../insurance/insurance.component';
import { InsuranceStaticService } from "../insurance-static.service";
import { DatePipe, Location } from '@angular/common';

@Component({
  selector: 'app-insurance-tabs-form',
  templateUrl: './insurance-tabs-form.component.html',
  styleUrls: ['./insurance-tabs-form.component.scss']
})
export class InsuranceTabsFormComponent implements OnInit{
  AuthorizationsForms!:FormGroup;
  UnitsSessionsDisable: boolean = true;
  SessionsAuthorization:boolean=true;
  SessionsUsed:boolean=true;
  checkedValueData:any[]=[];
  SelectedValues: any;
  CurrentTabval: any;
  tabsData: any;
  @Input() formData:any;
  @Input() insuranceExpire:any;

  @ViewChild(InsuranceComponent) InsuranceComponent;  


  constructor(private formBuilder:FormBuilder,private apiService:ClientAddService,private datePipe:DatePipe
    ) {
    

     }

  ngOnInit(): void {
    this.initForm()
    this.getCode()
  }
  initForm(){
    this.AuthorizationsForms =this.formBuilder.group({
      Id:[this.formData?.Id || ''],
      Fk_InsId:[this.formData?.Fk_InsId ||''],
      InsurancePolicy: [this.formData?.InsurancePolicy || ''],
      AuthNo: [this.formData?.AuthNo || ''],
      AuthType: ['Therapy'] ,
      StartDate: [ this.datePipe.transform(this.formData?.StartDate ,'YYYY-MM-dd') ||''],
      EndDate: [ this.datePipe.transform(this.formData?.EndDate ,'YYYY-MM-dd') ||''],
      IsVisitInUnitsSessions:[this.formData?.IsVisitInUnitsSessions ||false],
      UnitsSessionsAuthorized: [{value: this.formData?.UnitsSessionsAuthorized || '', disabled: this.UnitsSessionsDisable}],
      UnitSessionsUsed: [{value: this.formData?.UnitSessionsUsed || '', disabled: this.UnitsSessionsDisable}],
      IsVisitDays: [this.formData?.IsVisitDays ||false],
      DaysAuthorized:[{value: this.formData?.DaysAuthorized || '', disabled: this.SessionsAuthorization}],
      DaysUsed: [{value: this.formData?.DaysUsed || '', disabled: this.SessionsAuthorization}],
      IsVisitAmount: [this.formData?.IsVisitAmount ||false],
      VisitAmountAuthorized:[{value: this.formData?.VisitAmountAuthorized || '', disabled: this.SessionsUsed}],
      VisitAmountUsed: [{value: this.formData?.VisitAmountUsed || '', disabled: this.SessionsUsed}],
      SelectedServices: [''],
      NumberRemaining: [''],
      Status: [this.formData?.Id ? false : true],
      CreatedBy: [this.formData?.CreatedBy || ''],
      InsuranceLevel:this.formBuilder.array([]),
    })
    let data = this.formData?.SelectedServices.split(',')
    data?.forEach(element => {
      this.changeValueData1(true, element, true);
    });
    if(this.formData?.IsVisitInUnitsSessions){
      this.CheckValueVisit()
    }
    if(this.formData?.IsVisitDays) {
     this.CheckValueVisit()
    }
    if(this.formData?.IsVisitAmount) {
      this.CheckValueVisit()
    }
  }

  getCode(){
      let body={
        Types: [
          'regular',
        ]
      }
    this.apiService.GetCodeByStatus(body).subscribe((res:any)=>{
       this.checkedValueData = res.Data
    })
  }


  get AuthForm(){
    return this.AuthorizationsForms.controls;

  }

  changeValueData1(isChecked: any,data:any, forceVal?:boolean){
    let checkedValue = forceVal ? isChecked : isChecked.target.checked;
    const serviceFormArray = <FormArray>this.AuthorizationsForms.controls['InsuranceLevel'];

    if (checkedValue) {
      serviceFormArray.push(new FormControl(data));
    } else {
      let index = serviceFormArray.controls.findIndex(x => x.value == data)
      serviceFormArray.removeAt(index);
    }
    this.SelectedValues = serviceFormArray.value.join(',')
    this.AuthorizationsForms.controls['SelectedServices'].setValue(this.SelectedValues)
  }
  CheckValueVisit(value?:any,data?:any){
    if(value?.target.value == 'IsVisitInUnitsSessions' && this.UnitsSessionsDisable == true || this.formData?.IsVisitInUnitsSessions && data != 'force'){
      this.AuthorizationsForms.controls['DaysUsed'].disable();
      this.AuthorizationsForms.controls['DaysAuthorized'].disable();
      this.AuthorizationsForms.controls['DaysAuthorized'].setValue('');
      this.AuthorizationsForms.controls['DaysUsed'].setValue('');

      this.SessionsAuthorization = true
      this.AuthorizationsForms.controls['VisitAmountUsed'].disable();
      this.AuthorizationsForms.controls['VisitAmountAuthorized'].disable();
      this.AuthorizationsForms.controls['VisitAmountAuthorized'].setValue('');
      this.AuthorizationsForms.controls['VisitAmountUsed'].setValue('');
      this.SessionsUsed = true
      this.AuthorizationsForms.controls['UnitsSessionsAuthorized'].enable();
      this.AuthorizationsForms.controls['UnitSessionsUsed'].enable();
      this.UnitsSessionsDisable = false
      this.AuthorizationsForms.controls['IsVisitInUnitsSessions'].setValue('IsVisitInUnitsSessions')
    }else if(value?.target.value == 'IsVisitDays' && this.SessionsAuthorization == true || this.formData?.IsVisitDays && data != 'force'){
      this.AuthorizationsForms.controls['IsVisitInUnitsSessions'].setValue('IsVisitDays')
      this.AuthorizationsForms.controls['UnitsSessionsAuthorized'].disable();
      this.AuthorizationsForms.controls['UnitSessionsUsed'].disable();
      this.AuthorizationsForms.controls['UnitsSessionsAuthorized'].setValue('');
      this.AuthorizationsForms.controls['UnitSessionsUsed'].setValue('');
      this.UnitsSessionsDisable = true
      this.AuthorizationsForms.controls['VisitAmountUsed'].disable();
      this.AuthorizationsForms.controls['VisitAmountAuthorized'].disable();
      this.AuthorizationsForms.controls['VisitAmountAuthorized'].setValue('');
      this.AuthorizationsForms.controls['VisitAmountUsed'].setValue('');
      this.SessionsUsed = true

      this.AuthorizationsForms.controls['DaysUsed'].enable();
      this.AuthorizationsForms.controls['DaysAuthorized'].enable();
      this.SessionsAuthorization = false
      this.AuthorizationsForms.controls['IsVisitDays'].setValue(true)

    }else if(value?.target.value == 'IsVisitAmount'&& this.SessionsUsed == true || this.formData?.IsVisitAmount && data != 'force'){
      this.AuthorizationsForms.controls['IsVisitInUnitsSessions'].setValue('IsVisitAmount')
      this.AuthorizationsForms.controls['DaysUsed'].disable();
      this.AuthorizationsForms.controls['DaysAuthorized'].disable();
      this.AuthorizationsForms.controls['DaysAuthorized'].setValue('');
      this.AuthorizationsForms.controls['DaysUsed'].setValue('');

      this.SessionsAuthorization = true
      this.AuthorizationsForms.controls['UnitsSessionsAuthorized'].disable();
      this.AuthorizationsForms.controls['UnitSessionsUsed'].disable();
      this.AuthorizationsForms.controls['UnitsSessionsAuthorized'].setValue('');
      this.AuthorizationsForms.controls['UnitSessionsUsed'].setValue('');
      this.UnitsSessionsDisable = true
      this.AuthorizationsForms.controls['VisitAmountUsed'].enable();
      this.AuthorizationsForms.controls['VisitAmountAuthorized'].enable();
      this.SessionsUsed = false
      this.AuthorizationsForms.controls['IsVisitAmount'].setValue(true)

    }
  }

  CheckedValueIsVisitInUnitsSessions(data){
    let calculateData = (this.AuthorizationsForms.value.UnitsSessionsAuthorized - this.AuthorizationsForms.value.UnitSessionsUsed )
    this.AuthorizationsForms.controls['NumberRemaining'].setValue(calculateData)
  }
  CheckedValueIsVisitDays(data){
    let calculateData = (this.AuthorizationsForms.value.DaysAuthorized - this.AuthorizationsForms.value.DaysUsed )
    this.AuthorizationsForms.controls['NumberRemaining'].setValue(calculateData)
  }
  CheckedValueIsVisitAmount(data){
    let calculateData = (this.AuthorizationsForms.value.VisitAmountAuthorized - this.AuthorizationsForms.value.VisitAmountUsed )
    this.AuthorizationsForms.controls['NumberRemaining'].setValue(calculateData)
  }

}
