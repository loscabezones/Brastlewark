import { Component, OnInit } from '@angular/core';
import { BrastlewarkService } from 'src/app/core/servicios/brastlewark.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  textoBuscador:string;

  constructor( private brastlewarkService: BrastlewarkService) { }

  ngOnInit() {
    this.textoBuscador = "Buscar Nomo";
  }

  searchGnome( value:string ){
     this.brastlewarkService.getSearch(value);
  }

}
