import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { data } from 'jquery';
import { PeticionesService } from 'src/app/servicio/peticiones.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor( ){}

 /* postear(){  
this._http.post('http://localhost:5447/web/api/area/add',this.Areas,
).subscribe(
  data=>{
    console.log(data)}
  )}*/}
