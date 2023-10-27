import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
/* Componentes*/
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { CrearformComponent } from './components/crearform/crearform.component';

/* Material */
import { MaterialModule } from './material/material.module';
/* Dialogos */
import {MatDialogModule} from '@angular/material/dialog';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CrearformComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule ,
    FormsModule ,
    MatDialogModule,
    HttpClientModule,
    SweetAlert2Module.forRoot(),
    SweetAlert2Module,
     
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
