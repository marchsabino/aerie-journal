import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { Privilege } from 'src/app/shared/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService) {}

  login(event: Event) {
    event.preventDefault();
    this.userService.setCurrentUser({
      firstName: 'Marcello',
      lastName: 'Sabino',
      email: 'marchsabino@gmail.com',
      privilege: Privilege.ROOT,
      position: 'Web Developer',
      profileImage: {
        content:
          'https://avatars0.githubusercontent.com/u/58456034?s=460&u=30049529104bb2646e50b43e0a684a7235736cbf&v=4',
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  ngOnInit(): void {}
}
