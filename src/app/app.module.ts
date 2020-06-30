import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { NewsfeedComponent } from './views/newsfeed/newsfeed.component';
import { FooterComponent } from './core/footer/footer.component';
import { ArchivesComponent } from './views/archives/archives.component';
import { HistoryComponent } from './views/history/history.component';
import { StaffComponent } from './views/staff/staff.component';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './views/login/login.component';
import { ViewsModule } from './views/views.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [AppRoutingModule, BrowserModule, SharedModule, ViewsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
