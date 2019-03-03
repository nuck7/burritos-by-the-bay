import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router'
import { BurritoService } from '../core/services/burrito.service'
import { Burrito } from '../shared/models/burrito.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input('reviews') reviews: Observable<Burrito>;
  
  constructor(router: Router, private burritoService: BurritoService) { }

  ngOnInit() {
  }

}
