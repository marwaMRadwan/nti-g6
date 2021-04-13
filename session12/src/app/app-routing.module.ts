import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApidataComponent } from './apidata/apidata.component';
import { ParentComponent } from './components/parent/parent.component';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
  {path:'', component:ApidataComponent},
  {path:'parent', component:ParentComponent},
  {path:'news', component:PostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
