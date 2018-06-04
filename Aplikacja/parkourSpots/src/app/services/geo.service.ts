import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import * as GeoFire from 'geofire';

@Injectable({
  providedIn: 'root'
})
export class GeoService {
  public allSpots: any;


  constructor(private db: DatabaseService) {
    this.allSpots = db.spots;
  }

}
