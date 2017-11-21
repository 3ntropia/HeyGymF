import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LoginComponent} from './login.component';
import {ClientComponent} from './client.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ClientService} from './services/client.service';

@NgModule({
  declarations: [
    AppComponent,
    FormsModule,
    HttpModule,
    BrowserModule,
    LoginComponent,
    ClientComponent
  ],
  imports: [
  ],
  providers: [
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
