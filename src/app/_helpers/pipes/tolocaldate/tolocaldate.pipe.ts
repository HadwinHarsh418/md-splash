import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tolocaldate'
})
export class TolocaldatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    if (value)  {
      var utcDate= (<any>window) .moment.utc(value)
      var date= new Date(utcDate);
      return date.toLocaleString();
  } else {
        return '';
  }
  }

}
