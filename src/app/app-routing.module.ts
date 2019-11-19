import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HOMEComponent } from './home/home.component';
import { CREATEComponent } from './create/create.component';


import { pathToFileURL } from 'url';
import { UPDATEComponent } from './update/update.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HOMEComponent},
  {path: 'create', component: CREATEComponent},
  {path: 'update', component: UPDATEComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
