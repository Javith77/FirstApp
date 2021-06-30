import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password',
})
export class PasswordPipe implements PipeTransform {
  transform(value: string, active: boolean = false): string {
    return active ? '*'.repeat(value.length) : value;
  }
}
