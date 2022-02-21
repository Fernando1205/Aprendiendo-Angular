import { Component, DoCheck, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-videogame',
  templateUrl:'./videogame.component.html',
  styleUrls: ['./videogame.component.scss']
})

export class VideoGameComponent implements OnInit, DoCheck, OnDestroy{

  public title: string = 'Videojuegos'
  public videogames: Array<any> = [
    'GTA', 'LOL','RESIDENT EVIL'
  ];
  public mostrar: boolean = true;

  constructor(){
    this.title = 'Videojuegos Mas Populares';
    this.videogames.push('SILENT HILL');
    console.log('Componente cargado videogame');
  }


  ngOnInit(): void {
    console.log('OnInit ejecutado');
  }

  ngDoCheck(): void {
    console.log('Se hizo un cambio');
  }

  ngOnDestroy(): void {
    console.log('OnDestroy ejecutado');
  }

  cambiarTitulo(): void{
    this.title = 'Titulo cambiado';
  }

  ocultarvideojuegos(): void{
    this.mostrar = false;
  }

}
