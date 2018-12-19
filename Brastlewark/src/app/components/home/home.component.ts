import { Component, OnInit } from '@angular/core';
import { BrastlewarkService } from 'src/app/core/servicios/brastlewark.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  gnomes: any[] = [];
  allGnomes: any[] = [];
  maxGnomes: number;
  numberOfGnomes: number = 10;
  sumGnomes: number;
  error:boolean = false;
  mensajeError: string;
  loading: boolean;

  constructor(private brastlewarkService: BrastlewarkService) { }

  ngOnInit() {
    this.loading = true;

    //nos subscribimos a los datos recibidos
    this.getGnomes();

    //comprobamos errores de conexion
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
        if (!(gnomes === null)){
        this.allGnomes = gnomes;
        this.maxGnomes = this.allGnomes.length;
        }

        //mostramos los primeros 10 elemenots de los nomos
        if (!(gnomes === null)){
        this.sumGnomes = 10;
        this.gnomes = gnomes.slice(0, this.numberOfGnomes);
        }

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

  /**
   * Funcion que actualiza el array de los datos visibles con mas datos
   */
  ShowGnomes(){
    this.sumGnomes += 100;
    this.gnomes = this.allGnomes.slice(0, this.sumGnomes);
  }




}
