import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(value: any[], titleTask: string): any {
    if (titleTask && titleTask.length) {
      return value.filter(val => {
        return val.title.toLowerCase().indexOf(titleTask.toLowerCase()) > -1;
      });
    } else {
      return value;
    }
  }
}
