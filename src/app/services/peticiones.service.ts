import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

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
}
