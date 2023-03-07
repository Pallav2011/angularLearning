import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custum'
})
export class CustumPipe implements PipeTransform {

  transform(value: number): any {
    return value.toString().length;
  }

}
