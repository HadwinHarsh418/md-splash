import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';
import { Location } from '@angular/common';
@Component({
  selector: 'app-prpcollaborationnote',
  templateUrl: './prpcollaborationnote.component.html',
  styleUrls: ['./prpcollaborationnote.component.scss']
})
export class PRPCOLLABORATIONNOTEComponent implements OnInit {
  pregressNotes:FormGroup
  isDisable: boolean = true;
  StartTimer:any
  EndTime1:any
  TotalTimer:any
    
    constructor(private formBuilder:FormBuilder,private localToast: localToastService,private location:Location) { }


  ngOnInit(): void {
    this.init();
  }

  init(){
    this.pregressNotes =this.formBuilder.group({
      PrpcName:[''],
      CollaborationDate:[''],
      CollaborationMethod:[''],
      ClientName:[''],
      ClientDOB:[''],
      sameinput:[''],
      RenderingProviderID:[''],
      TherapistPhone:[''],
      Credentials:[''],
      TherapistEmail:[''],
      TherapistAgency:[''],
      PsychotherapyVisitFrequency:[''],
      PsychotherapyTxDuration:[''],
      PsychotherapyTxCompliance:[''],
      PsychiatryClientMedication:[''],
      PsychiatryCompliant:[''],
      PsychiatryVisitFrequency:[''],
      PrimaryCareMedication:[''],
      PrimaryCareCompliant:[''],
      PrimaryCareVisitFrequecy:[''],
      TherapistSelfCare:[''],
      TherapistEntitlement:[''],
      TherapistSocialSkills:[''],
      TherapistMedMgmt:[''],
      TherapistAlcoholUse:[''],
      TherapistOther:[''],
      TherapistIndependentLivingSkills:[''],
      TherapistEducational:[''],
      TherapistCopyingSkill:[''],
      TherapistHealthMgmt:[''],
      TherapistSubstanceUse:[''],
      TherapistFinanceMgt:[''],
      TherapistEmployement:[''],
      TherapistSafety:[''],
      TherapistTxCompliance:[''],
      TherapistGambling:[''],
      TherapistHousing:[''],
      TherapistTransportation:[''],
      TherapistCommunityAware:[''],
      TherapistLegalCompliance:[''],
      TherapistDomesticViolence:[''],
      PrpSelfCare:[''],
      PrpEntitlement:[''],
      PrpSocialSkills:[''],
      PrpMedMgmt:[''],
      PrpAlcoholUse:[''],
      PrpOther:[''],
      PrpIndependentLivingSkills:[''],
      PrpEducational:[''],
      PrpCopyingSkill:[''],
      PrpHealthMgmt:[''],
      PrpSubstanceUse:[''],
      PrpFinanceMgt:[''],
      PrpEmployement:[''],
      PrpSafety:[''],
      PrpTxCompliance:[''],
      PrpGambling:[''],
      PrpHousing:[''],
      PrpTransportation:[''],
      PrpCommunityAware:[''],
      PrpLegalCompliance:[''],
      PrpDomesticViolence:[''],
      TherapistComment:[''],
      PrpcComment:[''],
      Rendering_Provider:[''],
      ProcedureCode2:[''],

    })
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

  back(){
    this.location.back();
  }


}
