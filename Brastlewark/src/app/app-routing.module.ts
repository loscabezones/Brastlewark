import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GnomeComponent } from './components/gnome/gnome.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'gnome/:id', component: GnomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
