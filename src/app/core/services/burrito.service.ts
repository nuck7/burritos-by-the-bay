import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class BurritoService {

  public burritos = []
  constructor(private afs: AngularFirestore, public snackBar: MatSnackBar) {
    let requestCollection = this.afs.collection('burritos')
    requestCollection.get()
      .subscribe(reviews => {
        //let tempArray = []
        reviews.forEach(review => {
          this.burritos.push(review)
          //console.log(`REVIEW: ${JSON.stringify(review.data())}`)
        })
        //this.burritos.data = tempArray
      })
  }

  getBurrito(id) {
    for (let i = 0; i < this.burritos.length; i++) {
      if (this.burritos[i].id == id) {
        return this.burritos[i]
      }
    }
  }

  updateBurritoReview(review_id, review_values) {
    let requestCollection = this.afs.collection('burritos')
    requestCollection.doc(review_id).update(review_values)
      .then(() => {
        this.snackBar.open('Burrito Review Updated!', '', {
          duration: 1500,
        })
      })
      .catch((error) => {
        this.snackBar.open('Error Updating Burrito Review: ' + error, '', {
          duration: 1500,
        })        
      })
  }
}
