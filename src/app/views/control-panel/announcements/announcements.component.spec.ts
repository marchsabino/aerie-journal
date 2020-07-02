import { async, TestBed } from '@angular/core/testing';
import { AnnouncementsComponent } from './announcements.component';
import { FormsModule } from '@angular/forms';

describe('AnnouncementsComponent', () => {
  let component: AnnouncementsComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      providers: [AnnouncementsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    component = TestBed.inject(AnnouncementsComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
