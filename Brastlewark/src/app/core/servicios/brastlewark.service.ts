import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppModule } from 'src/app/app.module';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrastlewarkService {

  private errorApi = new BehaviorSubject(null);
  private gnomes = new BehaviorSubject(null);
  private gnome = new BehaviorSubject(null);
  gnomeList: any = [];

  constructor(private http: HttpClient) { }

  /**
   * Funcion que recibe un id y busca ese nomo en el array
   * Si no existe llama a la api y cuando tiene los datos lo devuelve
   * @param id 
   */
  getgnome(id: number) {

    if (this.gnomeList[id] === undefined) {
      this.getApiGnomes();
      console.log("llamamos a la api")
    }

    this.erroresApi().subscribe(error => {
      if (error === false) {
        console.log("rellenamos la info")
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
  getFilter(value: string) {
    let filtrado = this.gnomeList.filter(data => {
      return data.name.toLowerCase().indexOf(value.toLowerCase()) + 1;
    });
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


}
