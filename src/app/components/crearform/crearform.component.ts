import {  Component, OnInit, Renderer2  } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import { Respuestas,Form, Preguntas, Areas } from 'src/app/interfaces/respuestas';

import { PeticionesService } from 'src/app/servicio/peticiones.service';
import Swal from 'sweetalert2';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2'; 
import { data } from 'jquery';
import { finalize } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crearform',
  templateUrl: './crearform.component.html',
  styleUrls: ['./crearform.component.css']
})
export class CrearformComponent implements OnInit {
  cont: number = 0;
  indice: number = 0;
  idpregunta=0
  contresp: number = 0;
  form: Form = {
    nombre: ""
  };

  pregunta: Preguntas = {
    Context: "",
    Formid: ""
  };

  respuesta: Respuestas = {
    contexto: "",
    id: "",
    areas: []
  };

  area: Areas = {
    Nombre: "",
    valor: 0,
    idresp:0
  };

  idform = 0;
  areas: Areas[] = [];
  preguntas: Preguntas[] = [];
  respuestas: Respuestas[] = [];

  constructor(public dialog: MatDialog, private peticion: PeticionesService,private router:Router) { }

  async ngOnInit(): Promise<void> {
    this.pregunta.Formid = `${this.idform}`;
    const { value: nombre } = await Swal.fire({
      input: 'textarea',
      inputLabel: 'Introduce un Nombre',
      inputPlaceholder: 'Type your message here...',
      inputAttributes: {
        'aria-label': 'Type your message here'
      },
      showCancelButton: true
    });

    if (nombre) {
      this.form.nombre = nombre;
    }
  }

  async addpregunta() {
    const { value: text } = await Swal.fire({
      input: 'textarea',
      inputLabel: 'Introduce una pregunta',
      inputPlaceholder: 'Type your message here...',
      inputAttributes: {
        'aria-label': 'Type your message here'
      },
      showCancelButton: true
    });

    if (text) {
      const cont2 = this.cont + 1;
      const newpregunta: Preguntas = {
        Context: text,
        Formid: `${cont2}`
      };

      this.cont++;
      console.log(newpregunta);
      this.preguntas.push(newpregunta);
    }
  }

  async addRespuesta(x: string) {
    const newrespuesta: Respuestas = {
      contexto: "",
      id: x,
      areas: []
    };

    const newarea: Areas = {
      Nombre: "",
      valor: 0,
      idresp:0
    };

    const { value: text } = await Swal.fire({
      input: 'textarea',
      inputLabel: 'Introduce una respuesta',
      inputPlaceholder: 'Type your message here...',
      inputAttributes: {
        'aria-label': 'Type your message here'
      },
      showCancelButton: true
    });

    if (text) {
      newrespuesta.contexto = text;
      console.log(this.respuestas);
    }

    const { value: Area } = await Swal.fire({
      input: 'text',
      inputLabel: 'Introduce el Area',
      inputPlaceholder: 'Type your message here...',
      inputAttributes: {
        'aria-label': 'Type your message here'
      },
      showCancelButton: true
    });

    if (Area) {
      newarea.Nombre = Area;
    }

    const { value: valor } = await Swal.fire({
      input: 'number',
      inputLabel: 'Introduce Valor para el Area',
      inputPlaceholder: 'Type your message here...',
      inputAttributes: {
        'aria-label': 'Type your message here'
      },
      showCancelButton: true
    });

    if (valor) {
      newarea.valor = valor;
      newrespuesta.areas.push(newarea);
      this.areas.push(newarea);
      this.respuestas.push(newrespuesta);
    }
  }

  async postear() {
    try {
      await this.postform();
      await this.postpreguntas();
      await this.postRespuestas();
      await this.agregarAreas(this.areas)
     
    } catch (error) {
      console.error(error);
    }
    console.log("asdsa")
    this.router.navigateByUrl('/home');
  }

  postform() {
    return new Promise<void>((resolve, reject) => {
      
      this.peticion
        .post('http://localhost:5447/web/api/form/add', this.form)
        .subscribe(data=>{
          console.log(data)
        }
          
        );
        this.peticion.get('http://localhost:5447/web/api/form/get').subscribe((data)=>{
          console.log(data);
          this.idform = Object.keys(data).length;
          console.log(this.idform);
          resolve(console.log("formulario ok"));
        })
    });
  }

  postpreguntas() {
    return new Promise<void>((resolve, reject) => {
      
      for (const pregunta of this.preguntas)  {
        pregunta.Formid = `${this.idform}`;
        this.peticion
          .post('http://localhost:5447/web/api/question/add', pregunta)
          .subscribe(
            (data) => {
              console.log(data)
            },
            (error) => {
              reject(error);
            }
          );
      }
      this.peticion.get('http://localhost:5447/web/api/question/get').subscribe((data)=>{
        this.idpregunta= Object.keys(data).length
        console.log(data)
        resolve(console.log("preguntas ok"))
      })
    });
  }

  postRespuestas() {
    return new Promise<void>((resolve, reject) => {
      for (const respuesta of this.respuestas) {
        respuesta.id=`${this.idpregunta}`;
        this.peticion
          .post('http://localhost:5447/web/api/answer/add',respuesta)
          .subscribe(
            (data) => {
              console.log(data);
            },
            (error) => {
              reject(error);
            }
          );
      }
      this.peticion.get('http://localhost:5447/web/api/answer/get').subscribe((data)=>{
        resolve(console.log("respuestas ok"))
      })
    });
  }
  agregarAreas(areas: Areas[]) {
    return new Promise<void>((resolve, reject) => {
      let count = 0;
  
      for (const area of areas) {
        this.peticion
          .post('http://localhost:5447/web/api/area/add', area)
          .subscribe(
            (data) => {
              console.log(data);
              count++;
  
              if (count === areas.length) {
                
              }
            },
            (error) => {
              reject(error);
            }
          );
      }
      this.peticion.get('http://localhost:5447/web/api/area/get').subscribe((data)=>{
        resolve( console.log("areas ok"));
      })
    });
  }

}
