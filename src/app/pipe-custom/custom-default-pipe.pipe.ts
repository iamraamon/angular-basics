import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDefaultPipe'
})
export class CustomDefaultPipePipe implements PipeTransform {

 //ng generate pipe   name

  transform(value: string, fallback: string,  forceHttps: boolean = false): string {
    let image = "";
    if (value) {
      image = value;
    } else {
      image = fallback;
    }

    if (forceHttps) {
      if (image.indexOf("https") == -1) {
        image = image.replace("http", "https");
      }
    }
     return image;
  }

}
