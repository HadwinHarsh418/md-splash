import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/_helpers/auth/authentication.service';
import { ApiService } from 'src/app/_helpers/services/api.service';
import { StaticService } from 'src/app/_helpers/services/staticdata.service';
import { localToastService } from 'src/app/_helpers/services/toaster.service';
import { markAllDirty } from 'src/app/_helpers/utils';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  @Input() productType: string = '';
  @Input() productReviews: any[] = [];
  submitting:boolean =false;
  reviewForm: FormGroup;
  currentUser: any;
  constructor(
    public staticService: StaticService,
    public fb: FormBuilder,
    private localToast: localToastService,
    private authService: AuthenticationService,
    private apiService: ApiService,
  ) { 
    this.currentUser = this.authService.currentUserValue;
    this.authService.currentUser.subscribe(res => {
      this.currentUser = res;
    })
    this.setForm();
  }

  setForm() {
    this.reviewForm = this.fb.group(
      {
        rating: ['', [Validators.required]],
        comment: ['', [Validators.required]],
      }
    )
  }

  get f() {
    return this.reviewForm.controls;
  }

  ngOnInit(): void {
  }

  submitReview() {
    markAllDirty(this.reviewForm);
    if(this.reviewForm.invalid) {
      this.localToast.presentError('Please fill all required fields.')
      return;
    }
    let data = this.reviewForm.value;
    data.productType = this.productType;
    data.user_id = this.currentUser.user_id;
    data.user_name = `${this.currentUser?.first_name} ${this.currentUser?.last_name}`;
    data.review_on = new Date();
    this.submitting = true;
    this.apiService.addReview(data).subscribe(res => {
      if(res) {

      }
      this.submitting = false;
    }, error => {
      this.submitting = false;
      this.localToast.handleHttpErrorResponse(error);
    });
    // this.submitting = true;
  }

}
