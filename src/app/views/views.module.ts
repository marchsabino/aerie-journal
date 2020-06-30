import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchivesComponent } from './archives/archives.component';
import { HistoryComponent } from './history/history.component';
import { LoginComponent } from './login/login.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { StaffComponent } from './staff/staff.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ArchivesComponent,
    HistoryComponent,
    LoginComponent,
    NewsfeedComponent,
    StaffComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    ArchivesComponent,
    HistoryComponent,
    LoginComponent,
    NewsfeedComponent,
    StaffComponent,
  ],
})
export class ViewsModule {}
