import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsfeedComponent } from './views/newsfeed/newsfeed.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: NewsfeedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
