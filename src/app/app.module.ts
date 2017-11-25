import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LoginComponent} from './login.component';
import {ClientComponent} from './client.component';
import {ClientService} from './services/client.service';
import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    ClientComponent
  ],
  providers: [
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
