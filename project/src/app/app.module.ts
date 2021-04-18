import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalInterceptor } from './providers/global.interceptor';
import { HomeComponent } from './pages/home/home.component';
import { PediaComponent } from './pages/pedia/pedia.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { UpdateuserComponent } from './pages/updateuser/updateuser.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SliderComponent } from './shared/slider/slider.component';
import { NewsComponent } from './pages/news/news.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HomenewsComponent } from './shared/homenews/homenews.component';
import { PadiacatComponent } from './pages/padiacat/padiacat.component';
import { SinglearticleComponent } from './pages/singlearticle/singlearticle.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PediaComponent,
    RegisterComponent,
    LoginComponent,
    UpdateuserComponent,
    GalleryComponent,
    NavComponent,
    FooterComponent,
    SliderComponent,
    NewsComponent,
    HomenewsComponent,
    PadiacatComponent,
    SinglearticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    CarouselModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:GlobalInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
