import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models';

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.scss'],
})
export class ProfileImageComponent implements OnInit {
  @Input() user: User;
  @Input() alt = "User's Profile Image";
  @Input() width = '32px';
  @Input() height = '32px';

  constructor() {}

  ngOnInit(): void {
    if (this.user) {
      this.alt = `${this.user.firstName} ${this.user.lastName}'s Profile Image`;
    }
  }
}
