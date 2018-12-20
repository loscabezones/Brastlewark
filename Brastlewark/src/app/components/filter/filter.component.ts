import { Component, OnInit, Input } from '@angular/core';
import { BrastlewarkService } from 'src/app/core/servicios/brastlewark.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  dataFilter: {} = {};
  textHairColors: string;
  textProfessions: string;
  colorin: string;
  text1:string;
  text2:string;
  ShowColor:boolean = false;
  @Input() hairColors: string[]
  @Input() professions: string[]

  constructor( private brastlewarkService:BrastlewarkService ) { }

  ngOnInit() {

    //construimos el objeto dataFilter
    this.dataFilter = {
      hair: "",
      professions: "",
      age: ""
    }

    //texto por defecto de los filtros//
    this.text1 = "Color de pelo"
    this.text2 = "Profesión"
    this.textHairColors = this.text1;
    this.textProfessions = this.text2;
  }

  filterColor(data: string) {

    this.dataFilter['hair'] = data;
    this.textHairColors = data;

    if (data === '') {
      this.textHairColors = this.text1;
      this.colorin = '#6c757d';
      this.ShowColor = false;
    } else {
      this.colorin = data;
      this.ShowColor = true;
    }

    this.brastlewarkService.getFilter(this.dataFilter);

  }

  filterProfessions(data: string) {
    this.dataFilter['professions'] = data;
    this.textProfessions = data;

    this.brastlewarkService.getFilter(this.dataFilter);
  }

}
