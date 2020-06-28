import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementComponent } from './components/announcement/announcement.component';

@NgModule({
  declarations: [AnnouncementComponent],
  imports: [CommonModule],
  exports: [AnnouncementComponent],
})
export class SharedModule {}
