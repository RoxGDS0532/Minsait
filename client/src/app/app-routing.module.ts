import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistActComponent } from './components/hist-act/hist-act.component';
import { AutosComponent } from './components/autos/autos.component'; // Reemplaza 'ruta/al/' por la ruta real de tu componente AutosComponent
import { PromocionesComponent } from './components/promociones/promociones.component';
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
  } 
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
