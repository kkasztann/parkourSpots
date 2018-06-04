import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import * as GeoFire from 'geofire';

@Injectable({
  providedIn: 'root'
})
export class GeoService {

  private dbRef: any;
  private geoFire: any;

  hits = new BehaviorSubject([]);

  constructor(private db: DatabaseService) {
    this.dbRef = this.db.spotsCol;
    this.geoFire = new GeoFire(this.dbRef);
  }

  getLocations(radius: number, coords: Array<number>) {
    this.geoFire.query({
      center: coords,
      radius: radius
    }).on('key_entered', (key, location, distance) => {
      // tslint:disable-next-line:prefer-const
      let hit = {
        location: location,
        distance: distance
      };
      // tslint:disable-next-line:prefer-const
      let currentHits = this.hits.value;
      currentHits.push(hit);
      this.hits.next(currentHits);
    });
  }
}
