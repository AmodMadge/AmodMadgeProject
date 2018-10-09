import { Component, OnInit } from '@angular/core';
//import services
import { RestaurantService } from '../restaurant.service';
import { RestaurantdataService} from'../restaurantdata.service';
@Component({
  selector: 'app-restaurant-search',
  templateUrl: './restaurant-search.component.html',
  styleUrls: ['./restaurant-search.component.css']
})
export class RestaurantSearchComponent implements OnInit 
{
  restList = this.restaurantService.todos;
  constructor(private restaurantService:RestaurantService, private restaurantdataService: RestaurantdataService) 
  {
    
  }
  ngOnInit() 
  {
  }

  //function to get restaurant details after click on button
  onClick(k)
  {
  	console.log(k.restaurant.R.res_id);
    this.restaurantdataService.identity = k.restaurant.R.res_id;
    this.restaurantService.getRestDetail(this.restaurantdataService.identity);
    this.restaurantService.getRestReviews(this.restaurantdataService.identity);
  }
}
