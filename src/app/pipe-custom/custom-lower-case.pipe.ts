import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customLowerCase'
})
export class CustomLowerCasePipe implements PipeTransform {

  transform(value: string): string {

    console.log("iam in custom pipe Lowercase");
      
    return value.toLowerCase() + " I did transform by using Custom Pipes";
  }

}
