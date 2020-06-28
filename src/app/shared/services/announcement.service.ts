import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Announcement } from '../../shared/models';
@Injectable({
  providedIn: 'root',
})
export class AnnouncementService {
  constructor() {}

  getAnnouncement(): Observable<Announcement> {
    return of({
      title: 'Aerie Open Mic. Event',
      content:
        'Read poems, short stories, any of your work! Sing, play guitar, free style, do stand up! The microphone is yours. October 30th, 7:00 PM. Auerbach Hall',
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
}
