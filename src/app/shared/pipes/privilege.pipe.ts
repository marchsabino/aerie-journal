import { Pipe, PipeTransform } from '@angular/core';
import { Privilege } from '../models';

@Pipe({
  name: 'privilege',
})
export class PrivilegePipe implements PipeTransform {
  transform(value: number, ...args: string[]): string {
    switch (value) {
      case Privilege.STAFF:
        return 'Staff';
      case Privilege.MODERATOR:
        return 'Moderator';
      case Privilege.ADMIN:
        return 'Administrator';
      case Privilege.ROOT:
        return 'Root';
      default:
        return 'Staff';
    }
  }
}
