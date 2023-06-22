import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortname',
})
export class SortnamePipe implements PipeTransform {
  transform(value: any, ...args: any) {
    value?.sort((a: any, b: any) => {
      let fna = a[args].toUpperCase();
      let fnb = b[args].toUpperCase();
      if (fna < fnb) return -1;
      else if (fna > fnb) return 1;
      else return 0;
    });

    return value;
  }
}
