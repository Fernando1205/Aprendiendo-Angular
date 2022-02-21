import { Component } from '@angular/core';
import { Configuracion } from './models/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  descripcion: string = '';
  background: string = '';
  color: string = '';

  constructor(){
    this.title = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;
    this.background = Configuracion.fondo;
    this.color = Configuracion.color;
  }

  title = 'My App en Angular';
}
