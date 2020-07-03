import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { MembersComponent } from './members/members.component';
import { SettingsComponent } from './settings/settings.component';
import { ManageArchivesComponent } from './manage-archives/manage-archives.component';
import { ForumsModule } from './forums/forums.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgxSummernoteModule } from 'ngx-summernote';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DashboardComponent,
    AnnouncementsComponent,
    MembersComponent,
    SettingsComponent,
    ManageArchivesComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    ForumsModule,
    SharedModule,
    FormsModule,
    NgxSummernoteModule,
  ],
})
export class ControlPanelModule {}
