import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { User, Privilege, FieldData } from 'src/app/shared/models';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent implements OnInit {
  currentUser: User;
  members: User[];
  staffMembers: FieldData<User>[];

  constructor(private userService: UserService) {}

  deletePopup(): void {
    window.confirm('Are you sure you wish to delete the selected users?');
  }

  anySelected(): boolean {
    return !!this.staffMembers.find((u) => u.checked);
  }

  allSelected(): boolean {
    return this.staffMembers.every((u) => u.checked);
  }

  selectAll(event: any): void {
    this.staffMembers.map((user) => {
      user.checked = event.target.checked;
    });
  }

  selectSingle(index: number): void {
    this.staffMembers[index].checked = !this.staffMembers[index].checked;
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.members = users;
      this.staffMembers = users
        .filter((user) => {
          return user.privilege === Privilege.STAFF;
        })
        .map((user) => {
          return {
            data: user,
          };
        });
    });
    this.userService
      .getCurrentUser()
      .subscribe((user) => (this.currentUser = user));
  }
}
