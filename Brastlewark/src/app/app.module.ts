import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


//fontAswome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// importar rutas
import { AppRoutingModule } from './app-routing.module';

//importar componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { CardsComponent } from './components/cards/cards.component';
import { LoadingComponent } from './components/loading/loading.component';
import { SearchComponent } from './components/search/search.component';
import { GnomeComponent } from './components/gnome/gnome.component';
import { FilterComponent } from './components/filter/filter.component';
import { ErrorComponent } from './core/components/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CardsComponent,
    LoadingComponent,
    SearchComponent,
    GnomeComponent,
    FilterComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
