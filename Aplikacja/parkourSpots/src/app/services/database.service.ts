import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Spot } from '../models/spot';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private spotsCol: AngularFirestoreCollection<Spot>;
  public spots: any;

  constructor(private afs: AngularFirestore) {
    this.spotsCol = this.afs.collection('spots');
    // this.spots = this.spotsCol.valueChanges();
    this.spots = this.spotsCol.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Spot;
          const id = a.payload.doc.id;
          return { id, data };
        });
      });
  }

  addSpot(newSpot: Spot) {
    this.afs.collection('spots').add(newSpot);
  }
}
