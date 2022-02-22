import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactoUsuario } from './../models/contacto.usuario';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public usuario: ContactoUsuario;

  constructor() {
    this.usuario = new ContactoUsuario( '','','','');
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log('Evento submit');
    console.log(this.usuario);
    console.log(this.usuario.nombre);

    form.reset();
  }
}
