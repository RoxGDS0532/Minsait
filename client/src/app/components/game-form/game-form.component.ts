import { Component, OnInit } from '@angular/core';
import { Activities } from 'src/app/interfaces/actividades';
import {GamesService} from '../../services/games.service';
import { Usuarios } from 'src/app/interfaces/usuarios'
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit{


  act: any = [];
  usuarios: Usuarios= {
    idUsuario: undefined,
    nombre : '',
    correo: '',
    contrasena : '' ,
    telefono : undefined,
    nombreRol  : ''
  }
 
  constructor(private gameService: GamesService, private authService: AuthService,private router: Router){}
  ngOnInit(): void {
  
    var datos: any = this.authService.getCurrentUser();
  this.usuarios = datos[0];
  console.log(this.usuarios.idUsuario);

  if (this.usuarios.idUsuario !== undefined && this.usuarios.idUsuario !== null ) {
    this.getAct(this.usuarios.idUsuario);
  } else {
    console.error('El idUsuario es undefined');
    this.router.navigate(['/home']);
  }
  }

 getAct(idUsuario: number) {
  this.gameService.getact(idUsuario).subscribe(
    res => {
      console.log(res);
      this.act = res;
    },
    error => {
      console.error(error);
      this.router.navigate(['/home']); // Redirige a la ruta /home en caso de error
    }
  );
}

cancelar(id: string ) {
  if (this.usuarios.idUsuario !== undefined) {
    this.gameService.deleteact(id)
      .subscribe(
        res => {
          console.log(res);
          this.getAct(this.usuarios.idUsuario!); // Use non-null assertion
          alert("Actividad Cancelada");
        },
        error => {
          console.error(error);
          this.router.navigate(['/home']); // Redirige a la ruta /home en caso de error
        } 
      );
  } else {
    console.error('idUsuario is undefined');
  }
}



editact(id:string){
  console.log(id);
}
  
}
