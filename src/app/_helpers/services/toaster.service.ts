import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({ providedIn: 'root' })
export class localToastService {
  constructor(
      private toastr: ToastrService,
  ) {
  }

  presentError(message:any, timeout  = 1000) {
    this.toastr.error(message, '', { timeOut: timeout})
  }

  presentSuccess(message:any, timeout  = 1000) {
    this.toastr.success(message, '', { timeOut: timeout})
  }
  presentInfo(message:any, timeout  = 1000) {
    this.toastr.info(message, '', { timeOut: timeout})
  }
  handleHttpErrorResponse(errorResponse:any) {
    if(errorResponse && errorResponse.error?.message) {
        this.presentError(errorResponse.error.message, 1000);
      } else {
        this.presentError('Oops! something went wrong please try again later.', 1000);
      }
  }
}