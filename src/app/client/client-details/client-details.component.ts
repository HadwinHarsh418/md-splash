import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {
  active=1;
  insuranceForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal)
    { }

  ngOnInit(): void {
  }

  initForm() {
    this.insuranceForm = this.formBuilder.group(
      {
        // Insurance
        InsuranceCarrier: [''],
        Payor: ['',Validators.required],
        Notes: [''],
        PolicyNo: ['',Validators.required],
        GroupNo: [''],
        PolicyHolder: ['',Validators.required],
        Telephone: [''],
        Fax: [''],
        Address: ['',Validators.required] ,
        ClaimAddress: ['',Validators.required] ,
        EffectiveDate: ['',Validators.required],
        TerminationDate: ['',Validators.required],
        CoPay: ['',Validators.required],
        CoInsurance: ['',Validators.required] ,
        NoOfVisitsAllowed: ['',Validators.required],
        DeductibleAmount: ['',Validators.required],
        DeductibleBalance: ['',Validators.required],
        IsInformationRelease: ['',Validators.required],
        OutOfPocketAmount: ['',Validators.required],
        OutOfPocketBalance: ['',Validators.required],
        VerifiedBy: ['',Validators.required],
        MethodOfVerification: ['',Validators.required] ,
        VerificationDate: ['',Validators.required],
        SpokenWithForVerification: ['',Validators.required] ,
        IsAuthorizationsReq: ['',Validators.required],
        AuthorizationsReqFrom: ['',Validators.required] ,
        IsReferralReq: ['',Validators.required],
        ReferralReqFrom: ['',Validators.required] ,
        PreferredOrder: ['',Validators.required],
        InsuranceType: ['',Validators.required] ,
        IsYearlyDeductible: true,
        DeletedOn: ['',Validators.required],
        IsDeleted: true,
        PIT_IsOtherInsurance: ['',Validators.required] ,
        PIT_Benefits: ['',Validators.required] ,
        PIT_IsYearly: ['',Validators.required] ,
        PIT_IsContract: ['',Validators.required] ,
        PIT_Electronic_Player_ID: ['',Validators.required] ,
        PIT_ContractFrom: ['',Validators.required] ,
        PIT_ContractTo: ['',Validators.required],

        
      }
    )
  }
  get f() {
    return this.insuranceForm.controls;
  }

}
