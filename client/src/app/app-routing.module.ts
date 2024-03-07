import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistActComponent } from './components/hist-act/hist-act.component';
import { AutosComponent } from './components/autos/autos.component'; // Reemplaza 'ruta/al/' por la ruta real de tu componente AutosComponent
import { PromocionesComponent } from './components/promociones/promociones.component';
import { DetallesAutoComponent } from './components/detalles-auto/detalles-auto.component';
import { ReservaComponent } from './components/reserva/reserva.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : '/home',
    pathMatch : 'full'
  },
  {
    path : 'home',
    component : HistActComponent
  },
  { path: 'autos',
   component: AutosComponent
  },
  { 
    path: 'autos/detalles_auto', // Corrección aquí
    component: DetallesAutoComponent 
  },
  { path: 'promociones',
    component: PromocionesComponent
  },
  {
    path: 'reservas',
    component: ReservaComponent
  } 
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
