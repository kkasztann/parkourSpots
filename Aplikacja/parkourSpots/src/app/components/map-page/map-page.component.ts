import { Component, OnInit } from '@angular/core';
import { GeoService } from '../../services/geo.service';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss']
})
export class MapPageComponent implements OnInit {

  lat: number;
  lng: number;

  allSpots: any;

  constructor(private geo: GeoService) {
    this.allSpots = geo.allSpots;
   }

  ngOnInit() {
    this.getUserLocation();
  }

  private getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }
}
