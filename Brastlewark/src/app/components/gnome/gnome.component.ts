import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrastlewarkService } from 'src/app/core/servicios/brastlewark.service';

@Component({
  selector: 'app-gnome',
  templateUrl: './gnome.component.html',
  styleUrls: ['./gnome.component.scss']
})
export class GnomeComponent implements OnInit {

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
