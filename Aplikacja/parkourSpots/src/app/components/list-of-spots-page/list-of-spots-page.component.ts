import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { Spot, Lokalizacja } from '../../models/spot';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-list-of-spots-page',
  templateUrl: './list-of-spots-page.component.html',
  styleUrls: ['./list-of-spots-page.component.scss']
})
export class ListOfSpotsPageComponent implements OnInit {
  allSpots: any;
  spot: any;
  newSpot: Spot;

  public isLogin: boolean;
  gateAddSpot: boolean;

  constructor(private db: DatabaseService, public authService: AuthService) {
    this.allSpots = db.spots;
    this.spot = db.spot;
    this.gateAddSpot = false;

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
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    });
  }

  addSpot(newSpot) {
    this.db.addSpot(newSpot);
  }

  getSpot(id) {
    this.db.getSpot(id);
    this.spot = this.db.spot;
  }

  deleteSpot(id) {
    this.db.deleteSpot(id);
  }

  showAddSpot() {
    this.gateAddSpot = !this.gateAddSpot;
  }

}
