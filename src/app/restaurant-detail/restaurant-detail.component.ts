import { Component, OnInit } from '@angular/core';

//import services
import { RestaurantService } from '../restaurant.service';
import { RestaurantdataService } from '../restaurantdata.service';
//import observable
import { Observable } from 'rxjs/Observable';

//import data module for review and restaurant
import { Review } from '../restaurantData';
import { Restaurant } from '../restaurantData';

@Component({
    selector: 'app-restaurant-detail',
    templateUrl: './restaurant-detail.component.html',
    styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit 
{
    restaurant_details: Observable<Restaurant>;
    restaurant_reviews: Observable<Review>;
    constructor(private restaurantService: RestaurantService, private restaurantdataService: RestaurantdataService) { }
    ngOnInit() 
    {
        this.restaurant_details = this.restaurantService.todos1;
        this.restaurant_reviews = this.restaurantService.todosReview;
    }
}
