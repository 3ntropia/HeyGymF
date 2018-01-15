import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login.component';
import {ClientComponent} from './client.component';
import {HomeComponent} from './home.component';
import {DocComponent} from './doc.component';
import {ClientDetailComponent} from './client-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/heygym', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'documentation',  component: DocComponent },
  { path: 'clients', component: ClientComponent },
  { path: 'detail/:id', component: ClientDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { enableTracing: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
