import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsfeedComponent } from './views/newsfeed/newsfeed.component';
import { ArchivesComponent } from './views/archives/archives.component';
import { HistoryComponent } from './views/history/history.component';
import { StaffComponent } from './views/staff/staff.component';

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
