import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllproductsComponent } from './pages/allproducts/allproducts.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { AddComponent } from './resturant/user/add/add.component';

const routes: Routes = [
  {path:'', component: AddComponent},
  {path:'register', component:RegisterComponent},
  {path:'shop', component:AllproductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
