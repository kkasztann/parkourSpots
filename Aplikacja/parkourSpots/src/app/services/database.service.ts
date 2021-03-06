import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Spot } from '../models/spot';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  public spotsCol: AngularFirestoreCollection<Spot>;
  public spots: any;

  private spotsColCity: AngularFirestoreCollection<Spot>;
  public spotsCity: any;

  private spotDoc: AngularFirestoreDocument<Spot>;
  public spot: Observable<Spot>;


  constructor(private afs: AngularFirestore) {
    this.spotsCol = this.afs.collection('spots', ref => ref.orderBy('name'));
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

  getSpot(id: string) {
    this.spotDoc = this.afs.doc('spots/' + id);
    this.spot = this.spotDoc.valueChanges();
  }

  deleteSpot(id: string) {
    this.afs.doc('spots/' + id).delete();
  }

  updateSpot(id: string, spot: Spot) {
    this.spotDoc = this.afs.doc('spots/' + id);
    this.spotDoc.update(spot);
  }

  getSpotsCity(city: string) {
    this.spotsColCity = this.afs.collection('spots', ref => ref.where('city', '==', city));
    this.spotsCity = this.spotsColCity.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Spot;
          const id = a.payload.doc.id;
          return { id, data };
        });
      });
  }

}
