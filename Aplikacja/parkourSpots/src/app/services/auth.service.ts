import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'node_modules/rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;
  itsOk = true;

  constructor(
    public afAuth: AngularFireAuth) { }

  registerUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(userData => resolve(userData),
          err => reject(err));
    });
  }

  loginEmail(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(userData => resolve(userData),
          err => reject(err));
    });
  }

  loginGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  loginFacebook() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  getAuth() {
    return this.afAuth.authState.map(auth => auth);
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

  updateUser(name: string, email: string, password: string) {
    this.user = firebase.auth().currentUser;

    if (this.user.displayName !== name && name !== null && name !== '') {
      this.user.updateProfile({
        displayName: name,
      }).then(function () {
      }).catch(function (error) {
      });
    }

    if (this.user.email !== email && email !== null && email !== '') {
      this.user.updateEmail(email).then(function () {
      }).catch(function (error) {
      });
    }

    if (this.user.password !== password && password !== null && password !== '') {
      this.user.updatePassword(password).then(function () {
      }).catch(function (error) {
      });
    }
  }

  deleteUser() {
    this.user = firebase.auth().currentUser;
    this.user.delete().then(function () {
    }).catch(function (error) {
    });
  }

}
