import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { CrearformComponent } from './components/crearform/crearform.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:'full',
    redirectTo:'home',
  },
  {
    path:'home',
    component:HomeComponent,
    children:[
      {
        path:'',
        pathMatch:'prefix',
        redirectTo:'lista'
      },
      {
        path:'lista',   
        component:ListComponent
      },
      {
       path:'crear',
       component:CrearformComponent
      }
    ]
  }
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
