import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LoginComponent} from './login.component';
import {ClientComponent} from './client.component';
import {ClientService} from '../services/client.service';
import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HomeComponent} from './home.component';
import {DocComponent} from './doc.component';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import {DashboardComponent} from './dashboard.component';
import {ClientSearchComponent} from './client-search.component';
import {ClientSearchService} from '../services/client-search.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    ClientComponent,
    HomeComponent,
    DocComponent,
    DashboardComponent,
    ClientSearchComponent
  ],
  providers: [
    ClientService,
    ClientSearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
