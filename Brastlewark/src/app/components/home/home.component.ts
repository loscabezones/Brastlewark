import { Component, OnInit } from '@angular/core';
import { BrastlewarkService } from 'src/app/core/servicios/brastlewark.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  control: boolean = false;
  gnomes: any[] = [];
  allGnomes: any[] = [];
  maxGnomes: number;
  numberOfGnomes: number = 10;
  sumGnomes: number;
  hairColors: string[] = [];
  professions: string[] = [];
  ages:number [] = [];
  error: boolean = false;
  mensajeError: string;
  loading: boolean;

  constructor(private brastlewarkService: BrastlewarkService) { }

  ngOnInit() {
    this.loading = true;

    //nos subscribimos a los datos recibidos
    this.getGnomes();

    //comprobamos errores de conexion
    this.geterror();

    //control de filtro
    this.controlFilter();

  }

  getGnomes() {
    this.brastlewarkService.getGnomes().subscribe(
      (gnomes: any) => {

        //si recebimos null, llamamos al servicio que nos conecta con los datos
        if ((gnomes === null)) { this.brastlewarkService.getApiGnomes(); }

        //si contiene dato quitamos el spiner
        if (!(gnomes === null)) { this.loading = false; }

        //guardamos el contenido y miramos cuantos elementos tenemos.
        if (!(gnomes === null)) {
          this.allGnomes = gnomes;
          this.maxGnomes = this.allGnomes.length;

          //obtenemos todos los valores posibles de las propiedades para utilizarlo en los filtros
          this.getHairColor();
          this.getProfessions();
          this.getAge();
        }

        //mostramos los primeros 10 elemenots de los nomos
        if (!(gnomes === null)) {
          this.sumGnomes = 10;
          this.gnomes = gnomes.slice(0, this.numberOfGnomes);
          console.log(this.gnomes);
        }

      },
      err => { },
      () => { }
    );
  }

  geterror() {
    this.brastlewarkService.erroresApi().subscribe(
      (error: any) => {
        if (error === true) { this.loading = false }
        this.error = error;
        this.mensajeError = 'No se ha podido establecer conexion con los datos'
      },
      err => { },
      () => {
      });
  }

  /**
   * Funcion que actualiza el array de los datos visibles con mas datos
   */
  ShowGnomes() {
    this.sumGnomes += 10;
    this.gnomes = this.allGnomes.slice(0, this.sumGnomes);
  }

  /**
   * Funcion que guarda en el array hairColors
   * todos los colores de la propiedad hair_color sin repetir de toda la lista de nomos
   */
  getHairColor() {

    let gnomes = this.brastlewarkService.getGnomeList();
    if(gnomes.length === 0){
      gnomes = this.allGnomes;
    }

    gnomes.forEach(gnome => {
      this.hairColors.push(gnome.hair_color);
    });

    this.hairColors = this.eliminateDuplicates(this.hairColors);
  }

  /**
   * Funcion que guarda en el array professions
   * todas las professiones de la propiedad professiones sin repetir de toda la lista de nomos
   */
  getProfessions(){

    let gnomes = this.brastlewarkService.getGnomeList();
    if(gnomes.length === 0){
      gnomes = this.allGnomes;
    }


    gnomes.forEach(gnome =>{
      gnome.professions.forEach(profession =>{
        this.professions.push(profession);
      });
    });
    this.professions = this.eliminateDuplicates(this.professions);
  }

  /**
   * Funcion que guarda en el array ages
   * todas las edades de la propiedad age sin repetir de toda la lista de nomos
   */
  getAge(){
    let gnomes = this.brastlewarkService.getGnomeList();
    if(gnomes.length === 0){
      gnomes = this.allGnomes;
    }

    gnomes.forEach(gnome => {
      this.ages.push(gnome.age);
    });

    this.ages = this.eliminateDuplicates(this.ages);
  }

  /**
   * Funcion que espera un parametro array y devuelve el array eliminando los valores duplicados
   * 
   * @param arr /array 
   */
  eliminateDuplicates(arr:any) {

    let property:any;
    let longitud: number = arr.length;
    let result: any = [];
    let obj: any = {};

    for (let i = 0; i < longitud; i++) {
      obj[arr[i]] = "";
    }

    for (property in obj) {
      result.push(property);
    }

    return result;
  }

  controlFilter(){
    this.brastlewarkService.getControlFilter().subscribe(element=>{
      this.control = element;
    });
  }




}
