import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { AuthService } from 'src/app/services/auth.service';
import { Usuarios } from 'src/app/interfaces/usuarios';

@Component({
  selector: 'app-hist-act',
  templateUrl: './hist-act.component.html',
  styleUrls: ['./hist-act.component.css']
})
export class HistActComponent implements OnInit {


  constructor(private gameService: GamesService, private authService: AuthService) {}

  ngOnInit(): void {
  
}




}
