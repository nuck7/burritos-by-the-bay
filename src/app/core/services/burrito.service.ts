import { Injectable, Output, EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { Burrito } from 'src/app/shared/models/burrito.model';

@Injectable({
  providedIn: 'root'
})
export class BurritoService {


  // public burritos = []
  // constructor(private afs: AngularFirestore, public snackBar: MatSnackBar) {
  //   let requestCollection = this.afs.collection('burritos')
  //   requestCollection.get()
  //     .subscribe(reviews => {
  //       //let tempArray = []
  //       reviews.forEach(review => {
  //         this.burritos.push(review)
  //         //console.log(`REVIEW: ${JSON.stringify(review.data())}`)
  //       })
  //       //this.burritos.data = tempArray
  //     })
  // }

  constructor(private afs: AngularFirestore, public snackBar: MatSnackBar) { }

  addBurrito(data) {
    const key = this.afs.createId();
    return this.afs.collection('burritos').doc(key).set({ key, ...data });
  }

  getBurrito(id) {
    return this.afs.collection('burritos').doc(id).valueChanges();
  }

  getBurritos() {
    return this.afs.collection('burritos').valueChanges();
  }

  getBurritosWithFilter(filter) {
    return this.afs.collection<Burrito>('burritos', ref => ref.where('beans', '==', 11)).valueChanges()
  }

  updateBurritoReview(review_id, review_values) {
    review_values = { "beans": 3.4, "beans_type": "Refried", "cheese": 7, "comments": "This taqueria in Duboce holds it's own compared to it's cousin in the mission. Although similarly ranked, their burritos are not too similar. While the mission location was an all-around solid experience, this joint took me through a few big ups and downs. I'll start with the fact that this burrito was a bit more expensive, but was also one of the biggest around. The first few bites had me thinking I found one of the best spots in The Bay, but a slow decline had me forgetting what that first bite even tasted like. A good third of the burrito was super cold because of the crema and salsa (pico de gallo), and it was hard to distribute into each bite. So even from the start the whole burrito was just warm and by the end was not so hot. But! At least all of the ingredients in those first bites were really good. The asada had a nice fresh char from the griddle, some good meat juices, lots of guac and crema. As I got farther down much of the meat was pretty flavorless and un-charred, and the rice and bad refried beans stole the show...a show that nobody wants to see. The tortilla was grilled and as standard as they get. I'll give some extra props to the line cook who stuffed that burrito and somehow still folded all the ingredients inside. The salsa bar was ok. They had one, had options, but none were amazing. Still a plus over lots of places. So all in all this was one of the better SF burritos, fully equipped with high highs and medium lows. Not cheap, huge, and satisfying for any burrito craving. For comparison, this burrito was probably the third biggest I've ever had at a taqueria behind El Paisa@.com and El Farolito.", "cost": 11.73, "crema": 4, "date": "11/29/2018", "guacamole": 8, "guacamole_type": "Yes", "key": "hXBEFQmeo6kuyqHugNA5", "meat": 7, "meat_type": "Carne Asada", "order": "Super Burrito", "other": "Salsa bar with 5 salsas and pickled jalapeños", "overall_rating": 6.53, "picture": "https://www.dropbox.com/s/ywucxpjyax430i1/2018-11-29%2011.24.55.jpg?dl=0", "restaurant_name": "Taqueria El Castillito - Duboce", "rice": 3, "salsa": 8, "size": 9.5, "taste": 3, "tortilla": 7, "yelp_link": "https://www.yelp.com/biz/el-castillito-san-francisco-2" }
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

  /*createBurritoReview() {
    let requestCollection = this.afs.collection('burritos')
    requestCollection.doc(review_id).create(review_values)
      .then(() => {
        this.snackBar.open('Burrito Review Created!', '', {
          duration: 1500,
        })
      })
      .catch((error) => {
        this.snackBar.open('Error Creating Burrito Review: ' + error, '', {
          duration: 1500,
        })        
      })
  }*/
}
