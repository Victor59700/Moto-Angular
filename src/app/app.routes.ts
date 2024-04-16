import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CardMotoComponent } from './components/cardMoto/card-moto.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cardMoto/:id', component: CardMotoComponent }
];
