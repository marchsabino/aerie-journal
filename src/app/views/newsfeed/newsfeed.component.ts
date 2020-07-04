import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from 'src/app/shared/services/announcement.service';
import { Announcement } from 'src/app/shared/models';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss'],
})
export class NewsfeedComponent implements OnInit {
  filteredAnnouncements: Announcement[];
  announcements: Announcement[];

  constructor(private announcementService: AnnouncementService) {}

  getAnnouncements() {
    this.announcementService.getAnnouncements().subscribe((announcements) => {
      this.announcements = announcements;
      this.filteredAnnouncements = announcements.splice(0, 3);
    });
  }

  ngOnInit(): void {
    this.getAnnouncements();
  }
}
