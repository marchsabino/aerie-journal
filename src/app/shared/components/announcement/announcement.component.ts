import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../../services/announcement.service';
import { Announcement } from '../../models';
@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss'],
})
export class AnnouncementComponent implements OnInit {
  announcement: Announcement;

  constructor(private announcementService: AnnouncementService) {}

  ngOnInit(): void {
    this.announcementService.getAnnouncement().subscribe((announcement) => {
      // If the expiration date is null, we should show it
      if (announcement?.expiration ?? new Date() >= new Date()) {
        this.announcement = announcement;
      }
    });
  }
}
