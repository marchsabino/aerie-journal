import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NewsArticle, Privilege } from '../models';

@Injectable({
  providedIn: 'root',
})
export class NewsFeedService {
  constructor() {}

  getNewsArticles(): Observable<NewsArticle[]> {
    return of([
      {
        title: 'Now Accepting Submissions for 2020!',
        content:
          'Please click on Submit Your Work above for information on what & how to submit. Texts submissions due 10/10/19 * Art Submissions due 11/20/19',
        createdAt: new Date(),
        updatedAt: new Date(),
        author: {
          firstName: 'Marcello',
          lastName: 'Sabino',
          email: 'marchsabino@gmail.com',
          privilege: Privilege.ROOT,
          position: 'Web Developer',
          profileImage: {
            content:
              'https://avatars0.githubusercontent.com/u/58456034?s=400&u=30049529104bb2646e50b43e0a684a7235736cbf&v=4',
          },
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      },
      {
        title: 'Now Accepting Submissions for 2020!',
        content:
          'Please click on Submit Your Work above for information on what & how to submit.',
        createdAt: new Date(),
        updatedAt: new Date(),
        author: {
          firstName: 'Marcello',
          lastName: 'Sabino',
          email: 'marchsabino@gmail.com',
          privilege: Privilege.ROOT,
          position: 'Web Developer',
          profileImage: {
            content:
              'https://avatars0.githubusercontent.com/u/58456034?s=400&u=30049529104bb2646e50b43e0a684a7235736cbf&v=4',
          },
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      },
      {
        title: 'AERIE 2017 COVER CONTEST!',
        content:
          "We are now accepting entries for the 2017 Cover Contest! SEND YOUR ARTWORK AS A JPEG to: aerie.art.submit@gmail.com Each artist may send up to six images. The winner will have his or her work featured on the cover of AERIE 2017 and will receive a gift card to Jerry's Artarama. DEADLINE NOVEMBER 30th, 2016.",
        createdAt: new Date(),
        updatedAt: new Date(),
        author: {
          firstName: 'Marcello',
          lastName: 'Sabino',
          email: 'marchsabino@gmail.com',
          privilege: Privilege.ROOT,
          position: 'Web Developer',
          profileImage: {
            content:
              'https://avatars0.githubusercontent.com/u/58456034?s=400&u=30049529104bb2646e50b43e0a684a7235736cbf&v=4',
          },
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      },
    ]);
  }
}
