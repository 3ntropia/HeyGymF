import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login.component';
import {ClientComponent} from './client.component';
import {AppComponent} from './app.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'home',  component: AppComponent },
  { path: 'client', component: ClientComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,  { enableTracing: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}