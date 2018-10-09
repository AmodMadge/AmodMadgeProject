import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import Http Module
import {HttpClientModule} from '@angular/common/http';

//import router module for routing
import {Routes, RouterModule} from '@angular/router';

//import components
import { AppComponent } from './app.component';
import { RestaurantSearchComponent } from './restaurant-search/restaurant-search.component';
import { GetLocationComponent } from './get-location/get-location.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { HomeComponent } from './home/home.component';

//import service
import { RestaurantdataService } from './restaurantdata.service';

//Declare constatnt for routing
const appRoutes: Routes = [
  {path:'', component:GetLocationComponent},
  {path:'restaurant',component: RestaurantSearchComponent },
  {path:'restaurant/details',component:RestaurantDetailComponent}
];// End of route declarations

@NgModule({
  declarations: [
    AppComponent,
    RestaurantSearchComponent,
    GetLocationComponent,
    RestaurantDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
    ],
  providers: [RestaurantdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
