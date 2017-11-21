import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login.component';
import {ClientComponent} from './client.component';
import {AppComponent} from './app.component';


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'cliente', component: ClientComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
