import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: 'specialtyPipe'
})

export class SpecialtyPipe implements PipeTransform {

  transform(members: Member[], specialty: string): any {
    if (members) {
      if (specialty === 'All') {
        return members;
      } else {
        return members.filter(function(member) {
          return member.specialty === specialty;
        });
      }
    }
  }

}