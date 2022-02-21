import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-muebles',
  templateUrl: './muebles.component.html',
  styleUrls: ['./muebles.component.scss']
})
export class MueblesComponent implements OnInit {

  title: string = 'Muebles';
  muebles: Array<any> = [
    'Escritorio','Base Cama','Sillon'
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
