import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistActComponent } from './components/hist-act/hist-act.component';
import { AutosComponent } from './components/autos/autos.component'; // Reemplaza 'ruta/al/' por la ruta real de tu componente AutosComponent
import { PromocionesComponent } from './components/promociones/promociones.component';
<<<<<<< HEAD
import { DetallesAutoComponent } from './components/detalles-auto/detalles-auto.component';
import { ReservaComponent } from './components/reserva/reserva.component';
=======
import { AdminComponent } from './components/admin/admin.component';
import { AdminAutosComponent } from './components/admin-autos/admin-autos.component';
import { AdminAutosAgregarComponent } from './components/admin-autos-agregar/admin-autos-agregar.component';
import { AdminReservasComponent } from './components/admin-reservas/admin-reservas.component';
>>>>>>> dd1ff2f3173e7a653a0c8630c7bae897cd420d27

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
<<<<<<< HEAD
  },
  {
    path: 'reservas',
    component: ReservaComponent
  } 
=======
  } ,
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'admin-autos',
    component: AdminAutosComponent
  },
  {
    path: 'admin-autos-agregar',
    component: AdminAutosAgregarComponent
  },
  {
    path: 'admin-reserva',
    component: AdminReservasComponent
  }
>>>>>>> dd1ff2f3173e7a653a0c8630c7bae897cd420d27
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
