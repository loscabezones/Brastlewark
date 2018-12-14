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

    //nos subscribimos a los datos recibidos
    this.getGnomes();

    //comprobamos herrores de conexion
    this.geterror();


  }

  getGnomes() {
    this.brastlewarkService.getGnomes().subscribe(
      (gnomes: any) => {

        //si recebimos null, llamamos al servicio que nos conecta con los datos
        if((gnomes === null)){ this.brastlewarkService.getApiGnomes();}

        //si contiene dato quitamos el spiner
        if(!(gnomes === null)){this.loading = false;}

        //guardamos el contenido
        this.gnomes = gnomes;
      },
      err => { },
      () => { }
    );
  }

  geterror(){
    this.brastlewarkService.erroresApi().subscribe(
      (error:any) =>{
      if(error === true){this.loading = false}
      this.error = error;
      this.mensajeError = 'No se ha podido establecer conexion con los datos'
    },
    err=>{},
    ()=>{ 
    });
  }




}
