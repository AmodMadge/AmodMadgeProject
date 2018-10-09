import { Component, OnInit } from '@angular/core';

//import services
import { RestaurantService } from '../restaurant.service';
import { RestaurantdataService} from'../restaurantdata.service';

@Component({
  selector: 'app-get-location',
  templateUrl: './get-location.component.html',
  styleUrls: ['./get-location.component.css']
})
export class GetLocationComponent implements OnInit 
{
  currentLat: any;
  currentLong: any;
  asyncResult:any;
  constructor(private restaurantService:RestaurantService, private restaurantdataService: RestaurantdataService) { }

  ngOnInit() 
  { }

  //Call function to click button for getting location
  //Find location as per API and if not get any location then will display error message
  onGetLocation()
  {
  if (navigator.geolocation) 
    {
      navigator.geolocation.getCurrentPosition((position) => 
      {
        this.showPosition(position);
        this.restaurantdataService.position=position;
        this.restaurantService.getRestList(position);
      });
      } else 
    {
      alert("Geolocation is not supported by this browser.");
    }
  }

//Display position in console window i.e. latitude and longitude of your current area
  showPosition(position)
  {
    this.currentLat = position.coords.latitude;
    this.currentLong = position.coords.longitude;
    this.restaurantdataService.latitude = position.coords.latitude;
    this.restaurantdataService.longitude = position.coords.longitude;
    console.log("latitude "+this.currentLat);
    console.log("longitude "+this.currentLong);
  }

}
