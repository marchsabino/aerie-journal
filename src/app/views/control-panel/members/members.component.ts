import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent implements OnInit {
  currentUser: User;
  members: User[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.members = users;
    });
    this.userService
      .getCurrentUser()
      .subscribe((user) => (this.currentUser = user));
  }
}
