import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { AngularFireModule } from 'angularfire2';

import './rxjs-extentions';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroSearchComponent } from './hero-search.component';

import { HeroService } from './hero.service';

import { routing } from './app.route';

export const firebaseConfig = {
  apiKey: "AIzaSyBzUX1-p4G35uvUS-HnvP6AS6dxGGglW0U",
  authDomain: "angular2-tutorial-37d81.firebaseapp.com",
  databaseURL: "https://angular2-tutorial-37d81.firebaseio.com",
  storageBucket: "angular2-tutorial-37d81.appspot.com",
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    // AngularFireModule.initializeApp(firebaseConfig),
    routing
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }