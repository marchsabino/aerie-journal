import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { PrivilegePipe } from './pipes/privilege.pipe';
import { ActionButtonComponent } from './components/action-button/action-button.component';

@NgModule({
  declarations: [AnnouncementComponent, PrivilegePipe, ActionButtonComponent],
  imports: [CommonModule],
  exports: [AnnouncementComponent, ActionButtonComponent, PrivilegePipe],
})
export class SharedModule {}
