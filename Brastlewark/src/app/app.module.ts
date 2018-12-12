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
import { FooterComponent } from './components/footer/footer.component';
import { CardsComponent } from './components/cards/cards.component';
import { LoadingComponent } from './components/loading/loading.component';
import { SearchComponent } from './components/search/search.component';
import { DetailsComponent } from './components/details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CardsComponent,
    LoadingComponent,
    SearchComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
