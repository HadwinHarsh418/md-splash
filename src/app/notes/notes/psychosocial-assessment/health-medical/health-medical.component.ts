import { Location } from '@angular/common';
import { Component, OnInit ,Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-health-medical',
  templateUrl: './health-medical.component.html',
  styleUrls: ['./health-medical.component.scss']
})
export class HealthMedicalComponent implements OnInit {
  @Input() iop: any 
  healthMedForm!:FormGroup;
  isDisable: boolean = true;
  conditionDetail:boolean=false;

  constructor(private formBuilder:FormBuilder,private location:Location) { }
  imagesrc = '/assets/images/smail-icon.png';
  
  ngOnInit(): void {
    if(this.iop === 'iop'){
       this.conditionDetail = true
       
    }
    this.init()
  }

  init(){
    this.healthMedForm =this.formBuilder.group({
      Fname:[''],
      PhysicianAddress:[''],
      HM_City:[''],
      HM_State:[''],
      HM_Zipcode:[''],
      Telephone:[''],
      HM_Fax:[''],
      ApproxLastVisitDate:[''],
      MedicalProblemsDescription:[''],
      ProblemEffectDesciption:[{value: '', disabled: this.isDisable}],
      SurgeryDecription:[''],
      HeadInjuryDescription:[{value: '', disabled: this.isDisable}],
      AllergicMedicationDescription:[{value: '', disabled: this.isDisable}],
      Medication1:[''],
      Dosage1:[''],
      Frequency1:[''],
      Reason1:[''],

      ProblemEffect:['no'],
      HeadInjury:['no'],
      AllergicMedication:['no'],
    })
  }

  get AddForm(){
    return this.healthMedForm.controls;
  }

  Save(){
    
  }

  back(){
    this.location.back();
  }

  onSelectionChanged(value:any) {
    
    if (value.target.value == 'yes' && value.target.name == 'ProblemEffect') {
      this.healthMedForm.controls['ProblemEffectDesciption'].enable();
      this.isDisable = false;
    } 
   else if (value.target.value == 'yes' && value.target.name == 'HeadInjury') {
      this.healthMedForm.controls['HeadInjuryDescription'].enable();
      this.isDisable = false;
    } 
   else if (value.target.value == 'yes' && value.target.name == 'AllergicMedication') {
      this.healthMedForm.controls['AllergicMedicationDescription'].enable();
      this.isDisable = false;
    } 
    
    else {
      this.healthMedForm.controls['ProblemEffectDesciption'].disable();
      this.healthMedForm.controls['HeadInjuryDescription'].disable();
      this.healthMedForm.controls['AllergicMedicationDescription'].disable();
      this.isDisable = true;
    }

  }
}
