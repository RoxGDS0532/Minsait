import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistActComponent } from './components/hist-act/hist-act.component';
import { AutosComponent } from './components/autos/autos.component'; // Reemplaza 'ruta/al/' por la ruta real de tu componente AutosComponent
import { PromocionesComponent } from './components/promociones/promociones.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminAutosComponent } from './components/admin-autos/admin-autos.component';
import { AdminAutosAgregarComponent } from './components/admin-autos-agregar/admin-autos-agregar.component';
import { AdminReservasComponent } from './components/admin-reservas/admin-reservas.component';

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
  { path: 'promociones',
    component: PromocionesComponent
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
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
