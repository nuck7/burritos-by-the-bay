import { Component, OnInit } from '@angular/core';
import { BurritoService } from '../core/services/burrito.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

import { switchMap } from 'rxjs/operators';
import { Burrito } from '../shared/models/burrito.model';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {
  /*review: Burrito = {
    restaurant_name: '',
    order: '',
    cost: 0,
    comments: '',
    meat_type: '',
    meat: 0,
    beans_type: '',
    beans: 0,
    rice: 0,
    guacamole_type: '',
    guacamole: 0,
    crema: 0,
    salsa: 0,
    tortilla: 0,
    cheese: 0,
    other: '',
    size: 0,
    taste: 0,
    overall_rating: 0,
    picture: '',
    date: new Date(),
    yelp_link: '',
    id: ''
  }*/

  review

  beans_type_options = [
    {
      label: 'Pinto',
      value: 'Pinto'
    },
    {
      label: 'Black',
      value: 'Black'
    },
    {
      label: 'Refried',
      value: 'Refried'
    }
  ]

  guacamole_type_options = [
    {
      label: 'Yes',
      value: 'Yes'
    },
    {
      label: 'No',
      value: 'No'
    },
    {
      label: 'Avocado',
      value: 'Avocado'
    }
  ]

  meat_type_options = [
    {
      label: 'Carne Asada',
      value: 'Carne Asada'
    },
    {
      label: 'Barbacoa',
      value: 'Barbacoa'
    },
    {
      label: 'Al Pastor',
      value: 'Al Pastor'
    }
  ]

  constructor(private burritoService: BurritoService, private route: ActivatedRoute) { }

  ngOnInit() {
      try {
        this.route.queryParams.pipe(
          switchMap(params => this.burritoService.getBurrito(params['review']))
        ).subscribe(data => {
          console.log(`Data subscribe: ${JSON.stringify(data)}`)
          this.review = data
        })
        console.log(`Review variable: ${JSON.stringify(this.review)}`)

      }
      catch (err) {
        console.log(err)
      }
  }

  parseDate(date) {
    let parsedDate = new FormControl(new Date(date))
    return parsedDate.value
  }
  submitReview(formValues) {
    this.burritoService.addBurrito(formValues)
  }

  updateReview(review_id) {

    /*let reviewChanges = {
      beans: this.beans,
      beans_type: this.beans_type,
      cheese: this.cheese,
      comments: this.comments,
      cost: this.cost,
      crema: this.crema,
      date: this.date,
      guacamole: this.guacamole,
      guacamole_type: this.guacamole_type,
      meat: this.meat,
      meat_type: this.meat_type,
      order: this.order,
      other: this.other,
      overall_rating: this.overall_rating,
      picture: this.picture,
      restaurant_name: this.restaurant_name,
      rice: this.rice,
      salsa: this.salsa,
      size: this.size,
      taste: this.taste,
      tortilla: this.tortilla,
      yelp_link: this.yelp_link
    }*/
    this.burritoService.updateBurritoReview(review_id, review_id)
  }
}
