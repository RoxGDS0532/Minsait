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
import { PromocionesComponent } from './components/promociones/promociones.component';
import { AutosComponent } from './components/autos/autos.component';
import { DetallesAutoComponent } from './components/detalles-auto/detalles-auto.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminNaviComponent } from './components/admin-navi/admin-navi.component';
import { AdminAutosComponent } from './components/admin-autos/admin-autos.component';
import { AdminAutosAgregarComponent } from './components/admin-autos-agregar/admin-autos-agregar.component';
import { AdminReservasComponent } from './components/admin-reservas/admin-reservas.component';




@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HistActComponent,
    PromocionesComponent,
    AutosComponent,
    DetallesAutoComponent,
    AdminComponent,
    AdminNaviComponent,
    AdminAutosComponent,
    AdminAutosAgregarComponent,
    AdminReservasComponent,
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
