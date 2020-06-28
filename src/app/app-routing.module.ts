import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsfeedComponent } from './views/newsfeed/newsfeed.component';
import { ArchivesComponent } from './views/archives/archives.component';

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
