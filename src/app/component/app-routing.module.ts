import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login.component';
import {ClientComponent} from './client.component';
import {AppComponent} from './app.component';
import {HomeComponent} from './home.component';
import {DocComponent} from './doc.component';


const routes: Routes = [
  { path: '', redirectTo: '/heygym', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'documentation',  component: DocComponent },
  { path: 'client', component: ClientComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { enableTracing: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
