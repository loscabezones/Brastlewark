import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrastlewarkService } from 'src/app/core/servicios/brastlewark.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gnome',
  templateUrl: './gnome.component.html',
  styleUrls: ['./gnome.component.scss']
})
export class GnomeComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  gnome: any = {};
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private brastlewarkService: BrastlewarkService
  ) { }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  ngOnInit() {

    this.loading = true;
    this.error = false;

    //recojemos el valor por parametro y llamamos a getnome
    //que busca el nomo solicitado
    this.getgnome();

    //comprobamos errores de conexion
    this.geterror();

    //llamamos a la informacion del nomo solicitado
    this.getInfoGnome();

  }

  getgnome(){
    this.activatedRoute.params.subscribe(params => {
      this.brastlewarkService.getgnome(params.id);
    });
  }

  geterror() {
    this.brastlewarkService.erroresApi().subscribe(
      (error: any) => {
        if (error === true) { 
          this.loading = false 
        }
        this.error = error;
        this.mensajeError = 'No se ha podido establecer conexion con los datos'
      },
      err => { },
      () => {
      });
  }


  getInfoGnome() {

   this.subscription = this.brastlewarkService.getInfoGnome().subscribe(data => {
      this.gnome = data;
      console.log(this.gnome)
      if (!(this.gnome === null)) { this.loading = false; }
    });

  }

}
