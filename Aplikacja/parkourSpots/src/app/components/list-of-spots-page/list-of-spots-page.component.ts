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
  public spot: any;
  newSpot: Spot;

  public isLogin: boolean;
  gateAddSpot: boolean;
  gateModSpot: boolean;

  public currentSpot: Spot;

  id: string;


  constructor(private db: DatabaseService, public authService: AuthService) {
    this.allSpots = db.spots;
    this.spot = db.spot;
    this.gateAddSpot = false;
    this.gateModSpot = false;

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

    this.currentSpot = {
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
        this.newSpot.creator = auth.uid;
      } else {
        this.isLogin = false;
      }
    });
  }

  addSpot(newSpot) {
    this.db.addSpot(newSpot);


    this.newSpot = {
      city: '',
      creator: this.newSpot.creator,
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

  getSpot(id) {
    if (this.isLogin) {
      this.db.getSpot(id);
      this.spot = this.db.spot.map(dSpot => {
        this.currentSpot.name = dSpot.name;
        this.currentSpot.city = dSpot.city;
        this.currentSpot.creator = dSpot.creator;
        this.currentSpot.lokalizacja.latitude = dSpot.lokalizacja.latitude;
        this.currentSpot.lokalizacja.longitude = dSpot.lokalizacja.longitude;
        this.currentSpot.difficultyLevel = dSpot.difficultyLevel;
        this.currentSpot.rate = dSpot.rate;
        this.currentSpot.description = dSpot.description;

        if (this.currentSpot.creator === this.newSpot.creator) {
          this.gateModSpot = true;
        } else {
          this.gateModSpot = false;
        }
      });
      this.id = id;
    }
  }

  onClickDelete() {
    this.gateModSpot = false;
    this.db.deleteSpot(this.id);
    this.spot = this.db.spot;
  }

  showAddSpot() {
    this.gateAddSpot = !this.gateAddSpot;
  }

  onClickUpdate() {
    this.db.updateSpot(this.id, this.currentSpot);
  }

}
