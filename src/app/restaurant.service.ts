import { Injectable } from '@angular/core';

//importing httpClient module
import { HttpClient, HttpHeaders } from '@angular/common/http';

//import observable
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

//import BehaviouralSubject
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

//import data service
import { RestaurantdataService } from './restaurantdata.service';

//import data from restaurantData module
import { Restaurant } from './restaurantData';
import { ResData } from './restaurantData';
import { Review } from './restaurantData';

//declaration of user-key 
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'user-key': 'd85750357784a319a2f843e4961c0fc9'
  })
};


@Injectable({
  providedIn: 'root'
})
export class RestaurantService 
{
  latitude:any;
	longitude:any;
  k:Restaurant;
//Declare common part of api as url
	api_url ="https://developers.zomato.com/api/v2.1";

//Behaviour Subject for function getRestList to get restaurant list
private _todos: BehaviorSubject<Array<Restaurant>> = new BehaviorSubject(null);
public readonly todos: Observable<Array<Restaurant>> = this._todos.asObservable();

//Behaviour Subject for function getRestDetail to get restaurant details
private _todos1: BehaviorSubject<Restaurant> = new BehaviorSubject(null);
public readonly todos1: Observable<Restaurant> = this._todos1.asObservable();

//Behaviour Subject for getting reviews of restauarna
private _todosReview: BehaviorSubject<Review> = new BehaviorSubject(null);
public readonly todosReview: Observable<Review> = this._todosReview.asObservable();

  constructor(private httpClient:HttpClient, private restaurantdataService:RestaurantdataService) { }


  //function declaration for getting restaurant list

getRestList(position):Observable<Array<Restaurant>>
{  
  //Following API call is for getting your location and displaying the restaurants nearby you
 const  obs = this.httpClient.get<ResData>(this.api_url+'/geocode?lat='+position.coords.latitude+'&lon='+position.coords.longitude,httpOptions).pipe(map(
        (response:ResData )=>
        {
           console.log(response);
           return response.nearby_restaurants;
        }
        ));
obs.subscribe(
            res => {
                this._todos.next(res);
                console.log(res);
            });
return obs;
}



//Function toget details of restaurant details
getRestDetail(id):Observable<Restaurant>
{
  //Following API call is for getting the details of the selected Restaurant
const obs1 = this.httpClient.get<Restaurant>(this.api_url+'/restaurant?res_id='+id,httpOptions).pipe(map(  
  (response:Restaurant)=>
  {
    return response;
  }
  ));
obs1.subscribe(
  res=>
  {
    this._todos1.next(res)
    console.log(res);
  })
return obs1;
}


//Function to get restyaurant reviews
getRestReviews(id):Observable<Review>
{
  //Below API Call is going to be about getting the reviews of the selected restaurants
  const obs2 = this.httpClient.get<Review>(this.api_url+'/reviews?res_id='+id,httpOptions).pipe(map(  
  (response:Review)=>
    {
      return response;
    }
  ));
  obs2.subscribe(
    res=>
    {
      this._todosReview.next(res)
      console.log(res);
    })
  return obs2;
}
}
