import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { User, Privilege } from '../models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private currentUser = new ReplaySubject<User>(1);

  constructor() {}

  setCurrentUser(user: User): void {
    this.currentUser.next(user);
    sessionStorage.setItem('currentUser', JSON.stringify(user));
  }

  getCurrentUser(): Observable<User> {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    if (currentUser) {
      this.setCurrentUser(currentUser);
    }
    return this.currentUser.asObservable();
  }

  getUsers(): Observable<User[]> {
    return of([
      {
        firstName: 'Sophia',
        lastName: 'Clark',
        email: '',
        privilege: Privilege.STAFF,
        position: 'Fundraising & Grants Editor',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Listra',
        lastName: 'Mitchell-Simmons',
        email: '',
        privilege: Privilege.STAFF,
        position: 'Editor',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Prachi',
        lastName: 'Bhandutia',
        email: '',
        privilege: Privilege.STAFF,
        position: 'Advertising Editor',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Gabriella',
        lastName: 'Navas',
        email: '',
        privilege: Privilege.STAFF,
        position: 'Poetry Editor',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Domenic',
        lastName: 'Burby',
        email: '',
        privilege: Privilege.STAFF,
        position: 'Fiction Editor',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Bryana',
        lastName: 'Rivera',
        email: '',
        privilege: Privilege.STAFF,
        position: 'Secretary',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Estela',
        lastName: 'Laureano',
        email: '',
        privilege: Privilege.STAFF,
        position: 'Events Editor',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Terrence',
        lastName: 'White',
        email: '',
        privilege: Privilege.STAFF,
        position: 'Art Editor',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Benjamin',
        lastName: 'Grossberg',
        email: '',
        privilege: Privilege.ADMIN,
        position: 'Supervisor',
        profileImage: {
          content:
            'https://www.hartford.edu/directory/arts-science/_as_bio_images/grossberg-benjamin-640x640.jpg',
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Marcello',
        lastName: 'Sabino',
        email: 'marchsabino@gmail.com',
        privilege: Privilege.ROOT,
        position: 'Website Maintainer',
        profileImage: {
          content:
            'https://avatars0.githubusercontent.com/u/58456034?s=460&u=30049529104bb2646e50b43e0a684a7235736cbf&v=4',
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  }
}
