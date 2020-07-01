import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { PrivilegePipe } from './pipes/privilege.pipe';

@NgModule({
  declarations: [AnnouncementComponent, PrivilegePipe],
  imports: [CommonModule],
  exports: [AnnouncementComponent, PrivilegePipe],
})
export class SharedModule {}
