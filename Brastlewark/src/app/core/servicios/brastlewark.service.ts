import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrastlewarkService {

  constructor( private http: HttpClient) { }

  getGnomes(){

    return this.http.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json');

  }



}
