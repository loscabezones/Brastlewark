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
  gnomeList: any = [];

  constructor(private http: HttpClient) { }

  /** 
   *  optencion de los valores del observable gnomes
   */
  getGnomes() {
    return this.gnomes.asObservable();
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
      },
      err => {
        this.errorApi.next(true);
      },
      () => { });
  }

  /**
   * Observale que devuelve un booleano true, si ha habido un fallo
   */
  erroresApi() {
    return this.errorApi.asObservable();
  }

  /**
   * metodo que filtra los nomos. por nombre
   * 
   * @param filter // elemento de filtro
   * @param value  // valor del filtro
   */
  getFilter(value) {
    let filtrado = this.gnomeList.filter(data => {
      return data.name.toLowerCase().indexOf(value.toLowerCase()) + 1;
    });
    this.gnomes.next(filtrado);
    console.log(filtrado);
  }





}
