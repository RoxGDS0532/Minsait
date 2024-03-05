import { Component, OnInit,HostBinding } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { Activities } from 'src/app/interfaces/actividades';
import {GamesService} from '../../services/games.service';

@Component({
  selector: 'app-add-act',
  templateUrl: './add-act.component.html',
  styleUrls: ['./add-act.component.css'],
  
})
export class AddActComponent implements OnInit {
    Enc: any = [];
    Par: any = [];
    Est: any = [];
  constructor(private gameService: GamesService, private router: Router, private activateRouter : ActivatedRoute){}
  ngOnInit(): void {
    this.gameService.geEn().subscribe(
      res => {
        console.log(res),
        this.Enc = res
      },
      rep => console.error
      );

      this.gameService.gePar().subscribe(
        res => {
          console.log(res),
          this.Par = res
        },
        rep => console.error
        );
        this.gameService.geEst().subscribe(
          res => {
            console.log(res),
            this.Est = res
          },
          rep => console.error
          );

          this.activateRouter.snapshot.params;
          if (this.activateRouter.snapshot.params['id']){
            this.gameService.getacti(this.activateRouter.snapshot.params['id'])
            .subscribe(
              res => {
                console.log(res)
                console.log(this.activateRouter.snapshot.params['id'])
                this.activities = res;
                this.edit = true;
              },
              err => console.error(err)
            )
          }
  }
  
  @HostBinding('class') classes = 'row';

  activities: Activities = {
    idActividad: undefined,
    Nombre_Actividad: '',
    Descripcion: '',
    Encargado: undefined,
    Participante: undefined,
    Estatus: '',
    Fecha_de_inicio: undefined,
    Fecha_de_fin: undefined
  };
  
  edit: boolean = false;
  savenewactividad() {
    console.log(this.activities);
    this.gameService.saveact(this.activities)
    .subscribe(
      res => {
      console.log(res);
      this.router.navigate(['/gestion']);
    },
    err => console.error(err)
    )
  }
  
  updateAct() {
    if (this.activities.idActividad !== undefined) {
      this.gameService.updateact(this.activities.idActividad, this.activities)
        .subscribe(
          res => { 
            console.log(res);
            this.router.navigate(['/gestion']);
          },
          err => console.error(err)
        );
    } else {
      console.error("idActividad is undefined");
    }
  }
  
  
}
