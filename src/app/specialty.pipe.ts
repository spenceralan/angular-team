import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'specialty'
})
export class SpecialtyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
