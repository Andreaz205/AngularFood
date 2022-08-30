import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./Components/screens/home/home.component";
import {SaleComponent} from "./Components/screens/sale/sale.component";
import {ProfileComponent} from "./Components/screens/profile/profile.component";
import {FavoritesComponent} from "./Components/screens/favorites/favorites.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'sale',
    component: SaleComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
