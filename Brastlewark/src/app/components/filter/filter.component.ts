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
  textAges: string;
  colorin: string;
  text1: string;
  text2: string;
  text3: string;
  ShowColor: boolean = false;
  @Input() hairColors: string[]
  @Input() professions: string[]
  @Input() ages: number[]

  constructor(private brastlewarkService: BrastlewarkService) { }

  ngOnInit() {



    //construimos el objeto dataFilter
    this.dataFilter = {
      hair: "",
      professions: "",
      age: 0
    }

    //texto por defecto de los filtros//
    this.text1 = "Color de pelo"
    this.text2 = "Profesión"
    this.text3 = "Edad"

    //control de texto del input
    let namesFilter = this.brastlewarkService.getDataFilter();
    if (!(namesFilter === undefined)) {

      //rellenamos los datos con los que tenemos guardados
      this.dataFilter = namesFilter;

      //comporbamos nombre del color
      if((this.dataFilter['hair'].length) === 0){
        this.textHairColors = this.text1;
      }else{
        this.textHairColors = namesFilter['hair'];
        this.colorin = namesFilter['hair'];
        this.ShowColor = true;
      }

      //comporbamos nombre de la profession
      if((this.dataFilter['professions'].length) === 0){
        this.textProfessions = this.text2;
      }else{
        this.textProfessions = namesFilter['professions'];
      }

      //comporbamos nombre de la edad
      if((this.dataFilter['age']) === 0){
        this.textAges = this.text3;
      }else{
        this.textAges = namesFilter['age'];
      }


      //ponemos nombre por defecto
    } else {
      this.textHairColors = this.text1;
      this.textProfessions = this.text2;
      this.textAges = this.text3;
    }



    


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

    this.brastlewarkService.postDataFilter(this.dataFilter);

  }

  filterProfessions(data: string) {

    this.dataFilter['professions'] = data;
    this.textProfessions = data;

    if (data === '') {
      this.textProfessions = this.text2;
    }

    this.brastlewarkService.getFilter(this.dataFilter);
    this.brastlewarkService.postDataFilter(this.dataFilter);
  }

  filterAge(data: number) {
    this.dataFilter['age'] = data;
    this.textAges = data.toString();

    if (data === 0) {
      this.textAges = this.text3;
    }

    this.brastlewarkService.getFilter(this.dataFilter);
    this.brastlewarkService.postDataFilter(this.dataFilter);
  }

  //Funcion que resetea el filtro y muestra todos los nomos
  resetFilter() {
    this.dataFilter['age'] = 0;
    this.dataFilter['professions'] = '';
    this.dataFilter['hair'] = '';
    this.colorin = '#6c757d';
    this.ShowColor = false;

    this.textHairColors = this.text1;
    this.textProfessions = this.text2;
    this.textAges = this.text3;

    this.brastlewarkService.getSearch('');
    this.brastlewarkService.getFilter(this.dataFilter);
    this.brastlewarkService.postDataFilter(this.dataFilter);
  }

}
