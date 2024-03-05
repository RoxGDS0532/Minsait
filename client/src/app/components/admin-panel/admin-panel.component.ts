import { Component, OnInit } from '@angular/core';

interface Usuario {
  nombre: string;
  email: string;
  estatus: string;
}

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'] // Corrección en esta línea
})

export class AdminPanelComponent implements OnInit {

  usuarios: Usuario[] = [
    { nombre: 'Juan Pérez', email: 'juan@example.com', estatus: 'Activo' },
    { nombre: 'María Gómez', email: 'maria@example.com', estatus: 'Inactivo' },
    // Agrega más usuarios según sea necesario
  ];

  constructor() { }

  ngOnInit(): void {
    // Lógica de inicialización
  }

  validarUsuario(usuario: Usuario) {
    // Lógica para validar usuario
    console.log('Usuario validado:', usuario);
  }

  rechazarUsuario(usuario: Usuario) {
    // Lógica para rechazar usuario
    console.log('Usuario rechazado:', usuario);
  }
}
