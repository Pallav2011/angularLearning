import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchTerm:any): any {
    return value.filter(function(searchVal){
      return searchVal.name.toLowerCase().indexOf(searchTerm.toLowerCase() ) > -1
    });
  }

}
