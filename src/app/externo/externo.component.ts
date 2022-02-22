import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.scss'],
  providers: [ PeticionesService ]
})
export class ExternoComponent implements OnInit {

  public users: any;
  public userId: any;
  public date: any;

  constructor(
    private peticionesSservice: PeticionesService
  ) { }

  ngOnInit(): void {

    this.date = new Date(2022, 2, 21);
    setTimeout(() => {
      this.peticionesSservice.getUsers().subscribe(
        result => {
          this.users = result.data;
        },
        error => {
          console.log(error);
        }
      );
    }, 1000);

  }

}
