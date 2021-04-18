import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PadiacatComponent } from './pages/padiacat/padiacat.component';
import { PediaComponent } from './pages/pedia/pedia.component';
import { RegisterComponent } from './pages/register/register.component';
import { SinglearticleComponent } from './pages/singlearticle/singlearticle.component';

const routes: Routes = [
  {path:"", component:HomeComponent, pathMatch:'full'},
  {path:"register", component:RegisterComponent},
  {path:"login", component:LoginComponent},
  {path:"pedia", children:[
    {path:'', component:PediaComponent},
    {path:":Cat", component:PadiacatComponent},
    {path:":Cat/:art", component:SinglearticleComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
