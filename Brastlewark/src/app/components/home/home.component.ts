import { Component, OnInit } from '@angular/core';
import { BrastlewarkService } from 'src/app/core/servicios/brastlewark.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  gnomes: any[] = [];
  error:boolean = false;
  mensajeError: string;
  loading: boolean;

  constructor(private brastlewarkService: BrastlewarkService) { }

  ngOnInit() {
    this.loading = true;

    //conseguimos los datos de la api
    this.brastlewarkService.getApiGnomes();

    //comprobamos herrores de conexion
    this.brastlewarkService.erroresApi().subscribe(
      (error:any) =>{
      if(error === true){this.loading = false}
      this.error = error;
      this.mensajeError = 'No se ha podido establecer conexion con los datos'
    },
    err=>{},
    ()=>{ 
    });

    //nos subscribimos a los datos recibidos
      this.getGnomes();

  }

  getGnomes() {
    this.brastlewarkService.getGnomes().subscribe(
      (gnomes: any) => {
        if(!(gnomes === null)){this.loading = false;}
        this.gnomes = gnomes;
        if (typeof this.gnomes !== 'undefined') {
          
        }
      },
      err => { },
      () => { }
    );
  }




}
