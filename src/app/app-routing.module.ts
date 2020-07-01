import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsfeedComponent } from './views/newsfeed/newsfeed.component';
import { ArchivesComponent } from './views/archives/archives.component';
import { HistoryComponent } from './views/history/history.component';
import { StaffComponent } from './views/staff/staff.component';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/control-panel/dashboard/dashboard.component';
import { ForumsComponent } from './views/control-panel/forums/forums.component';
import { AnnouncementsComponent } from './views/control-panel/announcements/announcements.component';
import { MembersComponent } from './views/control-panel/members/members.component';
import { ManageArchivesComponent } from './views/control-panel/manage-archives/manage-archives.component';
import { SettingsComponent } from './views/control-panel/settings/settings.component';
import { RoleGuard } from './shared/guards/role.guard';
import { LoginGuard } from './shared/guards/login.guard';
import { Privilege } from './shared/models';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: NewsfeedComponent,
  },
  {
    path: 'archives',
    pathMatch: 'full',
    component: ArchivesComponent,
  },
  {
    path: 'history',
    pathMatch: 'full',
    component: HistoryComponent,
  },
  {
    path: 'staff',
    pathMatch: 'full',
    component: StaffComponent,
  },
  {
    path: 'login',
    canActivate: [LoginGuard],
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: 'control-panel',
    canActivate: [RoleGuard],
    data: {
      showHeader: false,
      minPrivilege: Privilege.STAFF,
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'forums',
        pathMatch: 'full',
        component: ForumsComponent,
      },
      {
        path: 'announcements',
        component: AnnouncementsComponent,
      },
      {
        path: 'members',
        component: MembersComponent,
      },
      {
        path: 'archives',
        canActivate: [RoleGuard],
        component: ManageArchivesComponent,
        data: {
          minPrivilege: Privilege.ADMIN,
        },
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
    ],
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NewsfeedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
