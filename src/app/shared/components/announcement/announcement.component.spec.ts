import { async, TestBed } from '@angular/core/testing';

import { AnnouncementComponent } from './announcement.component';

describe('AnnouncementComponent', () => {
  let component: AnnouncementComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [AnnouncementComponent],
    }).compileComponents();

    component = TestBed.get(AnnouncementComponent);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
