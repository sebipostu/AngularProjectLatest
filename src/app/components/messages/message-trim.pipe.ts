import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'messageTrim',
})
export class MessageTrimPipe implements PipeTransform {
  transform(value: string) {
    if (value.length > 100) {
      return value.substring(0, 100) + '[...]';
    }
    return value;
  }
}
