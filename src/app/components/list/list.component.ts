import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { data } from 'jquery';
import { PeticionesService } from 'src/app/servicio/peticiones.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements AfterViewInit, OnInit {
  constructor(private servicio: PeticionesService) { }
  
  formularios: PeriodicElement[] = [];
  
  ngOnInit() {
  this.reload();
}
  displayedColumns: string[] = [ 'Nombre', 'CreatedAt', 'UpdatedAt', 'DeletedAt'];
  dataSource = new MatTableDataSource<PeriodicElement>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  reload(){
    this.servicio.get('http://localhost:5447/web/api/form/get').subscribe((data) => {
      this.formularios = JSON.parse(JSON.stringify(data));
      console.log(this.formularios[1]);
      this.dataSource.data = this.formularios;
    });
  }
  Delet(x:any){
    const y:PeriodicElement=x
    console.log(y)
    this.servicio.post('http://localhost:5447/web/api/form/del',x).subscribe(
    (data)=>{
      console.log(data);
      
    }
    )
    this.reload()
  }
}

export interface PeriodicElement {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  Nombre: string;
  DeletedAt: string | null;
}