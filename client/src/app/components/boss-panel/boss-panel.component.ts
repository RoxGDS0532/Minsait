import { Component } from '@angular/core';

@Component({
  selector: 'app-boss-panel',
  templateUrl: './boss-panel.component.html',
  styleUrls: ['./boss-panel.component.css']
})
export class BossPanelComponent {
  postulantes: any[] = [
    { nombre: 'Juan', perfil: 'Desarrollador', cv: 'MiCV.pdf' },
    { nombre: 'María', perfil: 'Diseñador', cv: 'CV.pdf' },
    { nombre: 'Pedro', perfil: 'Gerente de Proyectos', cv: 'pedrocv.pdf' }
  ];

  rechazarPostulante(index: number) {
    const confirmacion = confirm('¿Estas seguro de que quieres eliminar este postulante?'); 
    if (confirmacion) {
      this.postulantes.splice(index, 1); 
    }
  } 
  
  aceptarPostulante() {
    alert('Postulante Aceptado');
  } 
}
