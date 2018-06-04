import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-list-of-spots-page',
  templateUrl: './list-of-spots-page.component.html',
  styleUrls: ['./list-of-spots-page.component.scss']
})
export class ListOfSpotsPageComponent implements OnInit {
  allSpots: any;
  constructor(private db: DatabaseService) {
    this.allSpots = db.spots;
   }

  ngOnInit() {
  }

}
