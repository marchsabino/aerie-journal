import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { Privilege, User } from 'src/app/shared/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private users: User[] = [];

  constructor(private router: Router, private userService: UserService) {}

  login(event: MouseEvent) {
    event.preventDefault();
    this.userService.setCurrentUser(
      this.users[Math.random() * this.users.length]
    );
    this.router.navigate(['/']);
  }

  onSuccessfulLogin() {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }
}
