import { Component, OnInit } from '@angular/core';
import { Zapato } from '../models/zapato';

@Component({
  selector: 'app-zapatos',
  templateUrl: './zapatos.component.html',
  styleUrls: ['./zapatos.component.scss']
})

export class ZapatosComponent implements OnInit{
  title:string = 'Zapatos';
  zapatos: Array<any> = [
    'Tennis', 'Zapatos', 'Chanclas'
  ];
  zapatosNuevo: Array<Zapato>;
  marcas:Array<string>=[];
  marcasOrd: boolean = false;
  precios:Array<number> = [];
  public color:string;
  miMarca:string ='';
  index: any;

  constructor(){
    this.color = 'blue';
    this.zapatosNuevo = [
      new Zapato('Reeb','Reebook','blanco',500,true),
      new Zapato('Spartan','Reebook','doradas',450,true),
      new Zapato('Nike classic','Nike','negro',600,false),
      new Zapato('Classic','Adidas','gris',400,true),
      new Zapato('Gucci','Gucci','plateadps',2500,false),
    ]
  }

  ngOnInit(): void {
    this.getMarcas();
    this.getPreciosMayorMenos();
  }

  getMarcas(){
    this.zapatosNuevo.forEach(nuevo => {
      if(this.marcas.indexOf(nuevo.marca) < 0) {
        this.marcas.push(nuevo.marca)
      };
    });
  }
  getPreciosMayorMenos(){
    this.zapatosNuevo.forEach(element => {
      this.precios.push(element.precio);
    });

    this.precios.sort(function(a,b) {
      return b-a;
    })
  }

  getMarcasOrd(){
    this.marcasOrd = true;
    this.marcas.sort();
  }

  addMarca(){
    this.marcas.push(this.miMarca);
    this.miMarca = '';
  }

  deleteMarca(i: any) {
    this.marcas.splice(i, 1);
  }

  onBlur(){
    console.log('Ha salido del blur');
  }
  onEnter(){
    console.log(this.miMarca);
  }
}
