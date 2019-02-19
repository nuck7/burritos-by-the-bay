import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { BurritoService } from '../core/services/burrito.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  reviews = this.burritoService.getBurritos();

  constructor(router: Router, private burritoService: BurritoService) { }

  ngOnInit() {
    //this.reviews = this.burritoService.getBurritoReviews()
    //console.log(this.reviews)
  }
}
