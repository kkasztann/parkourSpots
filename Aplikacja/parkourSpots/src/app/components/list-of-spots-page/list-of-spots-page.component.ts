import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { Spot, Lokalizacja } from '../../models/spot';

@Component({
  selector: 'app-list-of-spots-page',
  templateUrl: './list-of-spots-page.component.html',
  styleUrls: ['./list-of-spots-page.component.scss']
})
export class ListOfSpotsPageComponent implements OnInit {
  allSpots: any;
  spot: any;
  newSpot: Spot;

  constructor(private db: DatabaseService) {
    this.allSpots = db.spots;
    this.spot = db.spot;

    this.newSpot = {
      city: '',
      creator: '',
      description: '',
      difficultyLevel: null,
      lokalizacja: {
        latitude: null,
        longitude: null
      },
      name: '',
      rate: null
    };
  }

  ngOnInit() {
  }

  addSpot(newSpot) {
    this.db.addSpot(newSpot);
  }

  getSpot(id) {
    this.db.getSpot(id);
    this.spot = this.db.spot;
  }

}
