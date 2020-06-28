import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Archive } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ArchiveService {
  constructor() {}

  getArchives(): Observable<Archive[]> {
    return of([
      {
        title: 'Aerie 2013',
        content: 'Some content will go here',
        coverImage: {
          content:
            'http://aeriejournal.com/control/uploads/covers/2016aerie2013_0.png',
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Aerie 2012',
        content: 'Some content will go here',
        coverImage: {
          content:
            'http://aeriejournal.com/control/uploads/covers/20162012.jpg',
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Aerie 2011',
        content: 'Some content will go here',
        coverImage: {
          content:
            'http://aeriejournal.com/control/uploads/covers/2016v14_2011.jpg',
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Aerie 2010',
        content: 'Some content will go here',
        coverImage: {
          content:
            'http://aeriejournal.com/control/uploads/covers/2016v13_2010.jpg',
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Aerie 2009',
        content: 'Some content will go here',
        coverImage: {
          content:
            'http://aeriejournal.com/control/uploads/covers/2016v12_2009.jpg',
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Aerie 2008',
        content: 'Some content will go here',
        coverImage: {
          content:
            'http://aeriejournal.com/control/uploads/covers/2016v11_2008.jpg',
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Aerie 2007',
        content: 'Some content will go here',
        coverImage: {
          content:
            'http://aeriejournal.com/control/uploads/covers/2016v10_2007.jpg',
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  }
}
