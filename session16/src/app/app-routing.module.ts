import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { UserGuard } from './user.guard';
/*
data
data/x
data/y
/
*/
const routes: Routes = [
  {path:'data', children:[
    {path:"", component:ParentComponent, canActivate:[UserGuard]},
    {path:"x", component:ChildComponent, canActivate:[UserGuard]}
  ]},
  {path:"", redirectTo:"data", pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
