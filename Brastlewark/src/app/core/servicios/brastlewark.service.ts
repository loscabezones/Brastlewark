import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrastlewarkService {

  private errorApi = new BehaviorSubject(null);
  private gnomes = new BehaviorSubject(null);
  private gnome = new BehaviorSubject(null);
  private controlFilter = new BehaviorSubject(false);
  gnomeList: any = [];
  filtrado: any = [];
  datafilter: {} ;
  

  constructor(private http: HttpClient) {
   }


   /**
    * Funcion que envia el objeto datafilter
    */
   getDataFilter(){
     return this.datafilter;
   }


  /**
   *  Funcion que rellena el objeto datafilter, espera un parametro de tipo objeto
   * 
   * @param data /objeto con las siguientes propiedades
   *  hair : string, 
   *  professions : string, 
   *  age : number,
   *  
   */
   postDataFilter(data:object){
      this.datafilter = data
   }


   /**
    * Metodo que devuelve el observable que indica si no hay resultados 
    */
  getControlFilter(){
    return this.controlFilter.asObservable();
  }

  /**
   * Funcion que recibe un id y busca ese nomo en el array
   * Si no existe llama a la api y cuando tiene los datos lo devuelve
   * @param id 
   */
  getgnome(id: number) {

    if (this.gnomeList[id] === undefined) {
      this.getApiGnomes();
    }

    this.erroresApi().subscribe(error => {
      if (error === false) {
        this.gnome.next(this.gnomeList[id]);
      }
    });

  }

  /** 
   *  llamada a la api con los datos y pasamos los valores a nuestro observable,
   *  si tenemos errores pasamos un true al observable errorApi
   */
  getApiGnomes() {
    this.http.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json').subscribe(
      (gnomes: any) => {
        this.gnomes.next(gnomes.Brastlewark);
        this.gnomeList = gnomes.Brastlewark;
        this.filtrado =  this.gnomeList;
        this.errorApi.next(false);
      },
      err => {
        this.errorApi.next(true);
      },
      () => { });
  }



  /**
   * metodo que filtra los nomos. por nombre
   * 
   * @param filter // elemento de filtro
   * @param value  // valor del filtro
   */
  getSearch(value: string) {

    //buscamos en todos los nomos
      this.filtrado = this.gnomeList;


    let filtrado = this.filtrado.filter(data => {
      return data.name.toLowerCase().indexOf(value.toLowerCase()) + 1;
    });

    //si no encontramos nada mostramos el mensaje
    if(filtrado.length === 0){
      this.controlFilter.next(true);
    }else{
      this.controlFilter.next(false);
    }

    //actualizamos los valores mostrados
    this.gnomes.next(filtrado);

     //actualizamos los filtros
     this.filtrado = filtrado;

     //comprobamos estado del filtro
     let filtro = this.getDataFilter()
     if(!(filtro === undefined)){
       console.log(filtro);
       this.getFilter(filtro);
     }

  }

  /**
   * Metodo que filtra el resultado de los nomos
   * Segun el objeto pasado a la funcion
   * @param data / objeto con las propiedades y valores a filtrar
   */
  getFilter(data:object){

    //se aplica el filtro a los resultados

      let filtrado = this.filtrado.filter(element => {
        return     (data['hair'] ? element.hair_color === data['hair'] : true) && 
                   (data['professions'] ? element.professions.includes(data['professions']) : true) &&
                   (data['age'] ?  element.age === parseInt(data['age']) : true);
            
      });
      

      if(filtrado.length === 0){
        this.controlFilter.next(true);
      }else{
        this.controlFilter.next(false);
      }

      this.gnomes.next(filtrado);


  }




  /** 
   *  optencion de los valores del observable gnomes
   */
  getGnomes() {
    return this.gnomes.asObservable();
  }


  /**
   * Observale que devuelve un booleano true, si ha habido un fallo
   */
  erroresApi() {
    return this.errorApi.asObservable();
  }

  /**
   * Observale que devuelve los datos de un solo nomo
   */
  getInfoGnome() {
    return this.gnome.asObservable();
  }

  getGnomeList(){
    return this.gnomeList;
  }


}
