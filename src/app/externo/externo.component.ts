import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';
import { NgForm } from '@angular/forms';

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
  public new_user: any;
  public user_save:any;

  constructor(
    private peticionesSservice: PeticionesService
  ) {
    this.new_user = {
      "name": "",
      "job": ""
    }
   }

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

  onSubmit(form:NgForm){
    console.log(this.new_user);
    this.peticionesSservice.addUser(this.new_user).subscribe(
      response => {
        console.log(response);
        this.user_save = response;
        form.reset();
      },
      error => {
        console.log(error);
      }
    )
  }

}
