import { Injectable } from "@angular/core";
import { Zapato } from '../models/zapato';

@Injectable({
  providedIn: 'root',
})

export class ZapatoService {

  zapatosNuevo: Array<Zapato>;

  constructor() {
    this.zapatosNuevo = [
      new Zapato('Reeb','Reebook','blanco',500,true),
      new Zapato('Spartan','Reebook','doradas',450,true),
      new Zapato('Nike classic','Nike','negro',600,false),
      new Zapato('Classic','Adidas','gris',400,true),
      new Zapato('Gucci','Gucci','plateadps',2500,false),
      new Zapato('Air','Gucci','plateadps',5500,true),
      new Zapato('Classic','Gucci','plateadps',1500,true),
      new Zapato('Phone','Gucci','plateadps',600,false),

    ]
  }

  getZapatos():Array<Zapato> {
    return this.zapatosNuevo;
  }
}
