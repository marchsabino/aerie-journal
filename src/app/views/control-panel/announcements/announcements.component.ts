import { Component, OnInit } from '@angular/core';
import { Announcement } from 'src/app/shared/models';
import { AnnouncementService } from 'src/app/shared/services/announcement.service';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss'],
})
export class AnnouncementsComponent implements OnInit {
  announcements: Announcement[] = [];

  constructor(private announcementService: AnnouncementService) {}

  clearCurrentAnnouncement() {
    window.confirm('Are you sure you wish to clear the current announcement?');
  }

  ngOnInit(): void {
    this.announcementService.getAnnouncements().subscribe((announcements) => {
      this.announcements = announcements;
    });
  }
}
