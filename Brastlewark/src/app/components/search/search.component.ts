import { Component, OnInit } from '@angular/core';
import { BrastlewarkService } from 'src/app/core/servicios/brastlewark.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor( private brastlewarkService: BrastlewarkService) { }

  ngOnInit() {
  }

  searchGnome( value:string ){
     this.brastlewarkService.getSearch(value);
  }

}
