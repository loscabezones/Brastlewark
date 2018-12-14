import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrastlewarkService } from 'src/app/core/servicios/brastlewark.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  gnome: any = {};

  constructor( 
    private activatedRoute:ActivatedRoute,
    private brastlewarkService:BrastlewarkService
     ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params =>{
          console.log(params.id)
          this.brastlewarkService.getgnome(params.id);
      });

  }

}
