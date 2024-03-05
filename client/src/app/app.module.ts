import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from'@angular/forms'
import { NavigationComponent } from './components/navigation/navigation.component';
import { HistActComponent } from './components/hist-act/hist-act.component';
import {GamesService} from './services/games.service';




@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HistActComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    GamesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
