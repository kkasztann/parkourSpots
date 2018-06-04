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
  public spots: Observable<Spot[]>;

  constructor(private afs: AngularFirestore) {
    this.spotsCol = this.afs.collection('spots');
    this.spots = this.spotsCol.valueChanges();
   }
}
