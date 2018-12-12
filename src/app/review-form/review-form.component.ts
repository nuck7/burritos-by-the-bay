import { Component, OnInit } from '@angular/core';
import { BurritoService } from '../core/services/burrito.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {

  review
  public restaurant_name
  public order
  public cost
  public comments
  public meat_type
  public meat
  public beans_type
  public beans
  public rice
  public guacamole_type
  public guacamole
  public crema
  public salsa
  public tortilla
  public cheese
  public other
  public size
  public taste
  public overall_rating
  public picture
  public date
  public yelp_link




  beans_type_options = [
    {
      label: 'Pinto',
      value: 'pinto'
    },
    {
      label: 'Black',
      value: 'black'
    },
    {
      label: 'Refried',
      value: 'refried'
    }
  ]

  guacamole_type_options = [
    {
      label: 'Yes',
      value: 'yes'
    },
    {
      label: 'No',
      value: 'no'
    },
    {
      label: 'Avocado',
      value: 'avocado'
    }
  ]

  meat_type_options = [
    {
      label: 'Carne Asada',
      value: 'carne_asada'
    },
    {
      label: 'Barbacoa',
      value: 'barbacoa'
    },
    {
      label: 'Al Pastor',
      value: 'al_pastor'
    }
  ]

  constructor(private burritoService: BurritoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      //console.log(params['review'])
      this.review = this.burritoService.getBurrito(params['review'])
      this.restaurant_name = this.review.data().restaurant_name
      this.order = this.review.data().order
      this.cost = this.review.data().cost
      this.comments = this.review.data().comments
      this.meat_type = this.review.data().meat_type
      this.meat = this.review.data().meat
      this.beans_type = this.review.data().beans_type
      this.beans = this.review.data().beans
      this.rice = this.review.data().rice
      this.guacamole_type = this.review.data().guacamole_type
      this.guacamole = this.review.data().guacamole
      this.crema = this.review.data().crema
      this.salsa = this.review.data().salsa
      this.tortilla = this.review.data().tortilla
      this.cheese = this.review.data().cheese
      this.other = this.review.data().other
      this.size = this.review.data().size
      this.taste = this.review.data().taste
      this.overall_rating = this.review.data().overall_rating
      this.picture = this.review.data().picture
      this.date = this.review.data().date
      this.yelp_link = this.review.data().yelp_link

    })
    //console.log(this.review.id)
  }

  parseDate(date) {
    let parsedDate = new FormControl(new Date(date))
    return parsedDate.value
  }

  updateReview(review_id) {
    
    let reviewChanges = {
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
    }
    //console.log(`form: ${JSON.stringify(reviewChanges)}`)
    this.burritoService.updateBurritoReview(review_id, reviewChanges)
  }
}
