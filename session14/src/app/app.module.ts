import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveComponent } from './pages/reactive/reactive.component';
import { FBuilderComponent } from './pages/f-builder/f-builder.component';
import { RegisterComponent } from './app/pages/register/register.component';
import { HomeComponent } from './app/pages/home/home.component';
import { NavComponent } from './app/shared/nav/nav.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SelectDropDownModule } from 'ngx-select-dropdown'
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveComponent,
    FBuilderComponent,
    RegisterComponent,
    HomeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CarouselModule.forRoot(),
    SelectDropDownModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
