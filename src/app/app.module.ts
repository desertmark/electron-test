// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Component
import { AppComponent } from './app.component';
import { HomePageComponent } from 'src/app/pages/home-page/home-page.component';
import { ContactPageComponent } from 'src/app/pages/contact-page/contact-page.component';
// Others
import { routes } from 'src/app/routes';
import { NavComponent } from './components/nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactPageComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
