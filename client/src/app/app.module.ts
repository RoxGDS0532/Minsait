import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from'@angular/forms'
import { NavigationComponent } from './components/navigation/navigation.component';
import { GameFormComponent } from './components/game-form/game-form.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { AddActComponent } from './components/add-act/add-act.component';
import { HistActComponent } from './components/hist-act/hist-act.component';
import { LoginComponent } from './components/login/login.component';
import {GamesService} from './services/games.service';
import { UserComponent } from './components/user/user.component';
import { ResgisterComponent } from './components/resgister/resgister.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

import { BossPanelComponent } from './components/boss-panel/boss-panel.component';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GameFormComponent,
    GameListComponent,
    AddActComponent,
    HistActComponent,
    LoginComponent,
    UserComponent,
    ResgisterComponent,
    EditUserComponent,
    BossPanelComponent,
    AdminComponent
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
