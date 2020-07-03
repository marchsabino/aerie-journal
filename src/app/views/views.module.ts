import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchivesComponent } from './archives/archives.component';
import { HistoryComponent } from './history/history.component';
import { LoginComponent } from './login/login.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { StaffComponent } from './staff/staff.component';
import { RouterModule } from '@angular/router';
import { ControlPanelModule } from './control-panel/control-panel.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ArchivesComponent,
    HistoryComponent,
    LoginComponent,
    NewsfeedComponent,
    StaffComponent,
  ],
  imports: [CommonModule, RouterModule, ControlPanelModule, SharedModule],
  exports: [
    ArchivesComponent,
    HistoryComponent,
    LoginComponent,
    NewsfeedComponent,
    StaffComponent,
  ],
})
export class ViewsModule {}
