import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { SharedModule } from './shared/shared.module';
import { ViewsModule } from './views/views.module';
import { NgxSummernoteModule } from 'ngx-summernote';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    ViewsModule,
    NgxSummernoteModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
