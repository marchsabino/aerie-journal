import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { PrivilegePipe } from './pipes/privilege.pipe';
import { ActionButtonComponent } from './components/action-button/action-button.component';
import { UploadComponent } from './components/upload/upload.component';
import { DroppableDirective } from './directives/droppable.directive';
import { UserBlockComponent } from './components/user-block/user-block.component';
import { ProfileImageComponent } from './components/profile-image/profile-image.component';
import { TextFormComponent } from './components/text-form/text-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AnnouncementComponent,
    PrivilegePipe,
    ActionButtonComponent,
    UploadComponent,
    DroppableDirective,
    UserBlockComponent,
    ProfileImageComponent,
    TextFormComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    AnnouncementComponent,
    PrivilegePipe,
    ActionButtonComponent,
    UploadComponent,
    DroppableDirective,
    UserBlockComponent,
    ProfileImageComponent,
    TextFormComponent,
  ],
})
export class SharedModule {}
