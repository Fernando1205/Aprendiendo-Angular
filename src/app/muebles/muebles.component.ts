import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

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
  public color?:string;
  public followers?: number;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {

  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.color = params['color'];
      this.followers = parseInt(params['follows']);

      console.log( typeof(this.followers) );
    })
  }

  redirigir(){
    this._router.navigate(['/zapatos']);
  }

}
