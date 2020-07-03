import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ForumBoard, Privilege } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ForumService {
  private readonly boards: ForumBoard[] = [
    {
      id: 0,
      title: 'Accepted',
      description: 'Work that will definitely appear in Aerie',
      threads: [
        {
          id: 0,
          title: 'Hello World!',
          content: 'Just wanted to say hello',
          author: {
            firstName: 'Marcello',
            lastName: 'Sabino',
            email: 'marchsabino@gmail.com',
            privilege: Privilege.ROOT,
            position: 'Website Maintainer',
            profileImage: {
              content:
                'https://avatars0.githubusercontent.com/u/58456034?s=460&u=30049529104bb2646e50b43e0a684a7235736cbf&v=4',
            },
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          createdAt: new Date(),
          updatedAt: new Date(),
          comments: [
            {
              id: 0,
              content: 'Hello back! 👋',
              author: {
                firstName: 'Benjamin',
                lastName: 'Grossberg',
                email: 'marchsabino@gmail.com',
                privilege: Privilege.ADMIN,
                profileImage: {
                  content:
                    'https://www.hartford.edu/directory/arts-science/_as_bio_images/grossberg-benjamin-640x640.jpg',
                },
                position: 'Supervisor',
                createdAt: new Date(),
                updatedAt: new Date(),
              },
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ],
        },
        {
          id: 1,
          title: 'Initial Launch of Aerie 2.0!',
          content: 'We are releasing a new verison of Aerie!!',
          author: {
            firstName: 'Benjamin',
            lastName: 'Grossberg',
            email: 'marchsabino@gmail.com',
            privilege: Privilege.ADMIN,
            position: 'Supervisor',
            profileImage: {
              content:
                'https://www.hartford.edu/directory/arts-science/_as_bio_images/grossberg-benjamin-640x640.jpg',
            },
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 1,
      title: 'Edited',
      description: 'Work with final edits by editor',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      title: 'Revisions',
      description:
        'Work that has been edited by authors before final decision is made',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  constructor() {}

  getBoardById(id: string): Observable<ForumBoard> {
    return of(this.boards.find((board) => String(board.id) === id));
  }

  getBoards(): Observable<ForumBoard[]> {
    return of(this.boards);
  }
}
