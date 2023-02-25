import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDateTransform',
  standalone: true,
})
export class CustomDateTransformPipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}

  public transform(date: string | null) {
    return date ? this.datePipe.transform(`${date}`, 'MM/dd/yyyy') : null;
  }
}
