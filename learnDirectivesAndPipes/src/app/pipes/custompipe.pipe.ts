import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(value: string, genderType: string): string {
    if(genderType == "M")
    {
      return "Mr. " + value;
    }
    else if(genderType == "F")
    {
      return "Mrs. " + value;
    }
    else if(genderType == "G")
    {
      return "Ms. " + value;
    }
    else 
    {
      return value;
    }
  }

}
