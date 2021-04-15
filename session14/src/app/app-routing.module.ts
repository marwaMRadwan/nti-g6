import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './app/pages/home/home.component';
import { LoginComponent } from './app/pages/login/login.component';
import { RegisterComponent } from './app/pages/register/register.component';
import { FBuilderComponent } from './pages/f-builder/f-builder.component';
import { ReactiveComponent } from './pages/reactive/reactive.component';

const routes: Routes = [
  // {path:"", component:ReactiveComponent},
  // {path:'fb',component:FBuilderComponent},
  {path:'', component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
