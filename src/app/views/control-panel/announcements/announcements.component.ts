import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss'],
})
export class AnnouncementsComponent implements OnInit {
  content = '';

  constructor() {}

  clearCurrentAnnouncement() {
    window.confirm('Are you sure you wish to clear the current announcement?');
  }

  ngOnInit(): void {}
}
