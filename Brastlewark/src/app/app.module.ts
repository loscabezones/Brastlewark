import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// importar rutas
import { AppRoutingModule } from './app-routing.module';

//importar componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { HomeComponent } from './components/home/home.component';

// importar servicios
import { BrastlewarkService } from './core/servicios/brastlewark.service';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    BrastlewarkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
