import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ContactoUsuario } from '../models/contacto.usuario';

@Injectable()

export class PeticionesService{

  public url: string = '';

  constructor(
    private http: HttpClient
  ){
    this.url = 'https://reqres.in/';
  }

  getUsers(): Observable<any>{
    return this.http.get(this.url + 'api/users?page=1');
  }

  addUser(user: ContactoUsuario): Observable<any> {
    let params = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post(this.url + 'api/users', params, { headers });
  }
}
