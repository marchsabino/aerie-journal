import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { PrivilegePipe } from './pipes/privilege.pipe';
import { ActionButtonComponent } from './components/action-button/action-button.component';
import { UploadComponent } from './components/upload/upload.component';
import { DroppableDirective } from './Directives/droppable.directive';

@NgModule({
  declarations: [
    AnnouncementComponent,
    PrivilegePipe,
    ActionButtonComponent,
    UploadComponent,
    DroppableDirective,
  ],
  imports: [CommonModule],
  exports: [
    AnnouncementComponent,
    ActionButtonComponent,
    PrivilegePipe,
    UploadComponent,
    DroppableDirective,
  ],
})
export class SharedModule {}
