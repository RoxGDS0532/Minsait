import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameFormComponent } from './components/game-form/game-form.component';
import { AddActComponent } from './components/add-act/add-act.component';
import { HistActComponent } from './components/hist-act/hist-act.component';
import { LoginComponent } from './components/login/login.component';
import { ResgisterComponent } from './components/resgister/resgister.component';
import { UserComponent } from './components/user/user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { BossPanelComponent } from './components/boss-panel/boss-panel.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdminComponent } from './components/admin/admin.component';
const routes: Routes = [
  {
    path : '',
    redirectTo : '/home',
    pathMatch : 'full'
  },
  {
    path : 'home',
    component : GameListComponent
  },
  {
  
  path : 'gestion',
  component : GameFormComponent
  },
  {
  
  path : 'add',
  component : AddActComponent
  },
  {
  
    path : 'Admin',
    component : AdminComponent
    },
  {
  
  path : 'boss',
  component : BossPanelComponent
  }
  ,
  {
  
  path : 'login',
  component : LoginComponent
  } ,
  {
  
  path : 'register',
  component : ResgisterComponent
  
  },
  {
  
    path : 'user',
    component : UserComponent
    
    },
    {
    
      path : 'edituser/:id',
      component : EditUserComponent
      
      }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
