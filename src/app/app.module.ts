import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './Components/ui/layout/layout.component';
import {LayoutModule} from "./Components/ui/layout/layout.module";
import {HeaderModule} from "./Components/ui/layout/header/header.module";
import {HttpClientModule} from "@angular/common/http";
import { SaleComponent } from './Components/screens/sale/sale.component';
import { ProfileComponent } from './Components/screens/profile/profile.component';

import { ProductComponent } from './Components/screens/product/product.component';
import { FoodItemComponent } from './Components/screens/food-item/food-item.component';
import { FiltersComponent } from './Components/screens/filters/filters.component';
import { SearchComponent } from './Components/screens/search/search.component';
import {HomeModule} from "./Components/screens/home/home.module";
import {FavoritesComponent} from "./Components/screens/favorites/favorites.component";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SaleComponent,
    ProfileComponent,
    FavoritesComponent,
    ProductComponent,
    // FoodItemComponent,
    // FiltersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HeaderModule,
    HttpClientModule,
    HomeModule,
    FormsModule
  ],
  providers: [],
  exports: [
    // FiltersComponent,
    // SearchComponent,
    // FoodItemComponent,
    // ProductComponent,
    // FoodItemComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
