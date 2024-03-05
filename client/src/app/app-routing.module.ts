import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistActComponent } from './components/hist-act/hist-act.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : '/home',
    pathMatch : 'full'
  },
  {
    path : 'home',
    component : HistActComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
