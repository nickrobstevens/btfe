import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstNameOnly'
})
export class FirstNameOnlyPipe implements PipeTransform {

  transform(value: string): string {

    const titles = ['Mr.', 'Mrs.', 'Ms.', "Miss.", "Dr."];
    const nameParts = value.split(' ');

    // Filter out the titles
    return (titles.includes(nameParts[0])) ? nameParts[1] : nameParts[0];

  }

}
