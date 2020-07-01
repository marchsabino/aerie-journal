import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { MembersComponent } from './members/members.component';
import { SettingsComponent } from './settings/settings.component';
import { ManageArchivesComponent } from './manage-archives/manage-archives.component';
import { ForumsModule } from './forums/forums.module';

@NgModule({
  declarations: [
    DashboardComponent,
    AnnouncementsComponent,
    MembersComponent,
    SettingsComponent,
    ManageArchivesComponent,
  ],
  imports: [CommonModule, ForumsModule],
})
export class ControlPanelModule {}
