import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  constructor( private _http:HttpClient) { }
public get (url:string){
  return this._http.get(url)
}
public post(url:string,body:any,){
  return this._http.post(url,body);
}
}
