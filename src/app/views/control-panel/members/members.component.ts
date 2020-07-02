import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { User, Privilege } from 'src/app/shared/models';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent implements OnInit {
  currentUser: User;
  members: User[];

  constructor(private userService: UserService) {}

  deletePopup(): void {
    window.confirm('Are you sure you wish to delete the selected users?');
  }

  getStaffMembers(): User[] {
    return this.members.filter((user) => {
      return user.privilege === Privilege.STAFF;
    });
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.members = users;
    });
    this.userService
      .getCurrentUser()
      .subscribe((user) => (this.currentUser = user));
  }
}
