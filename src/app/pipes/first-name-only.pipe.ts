import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstNameOnly'
})
export class FirstNameOnlyPipe implements PipeTransform {

  transform(value: string): string {
    return value.substring(0, value.indexOf(' '));
  }

}
