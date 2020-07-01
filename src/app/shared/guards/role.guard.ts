import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { User } from '../models';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const minPrivilege = route.data.minPrivilege;
    const user = JSON.parse(sessionStorage.getItem('currentUser')) as User;

    if (!user) {
      this.router.navigate(['/']);
      return false;
    }

    return user.privilege >= minPrivilege;
  }
}
