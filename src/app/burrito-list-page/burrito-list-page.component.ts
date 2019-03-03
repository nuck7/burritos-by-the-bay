import { Component, OnInit } from '@angular/core';
import { Filter } from '../shared/models/filter.model';
import { BurritoService } from '../core/services/burrito.service';
import { Burrito } from '../shared/models/burrito.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-burrito-list-page',
  templateUrl: './burrito-list-page.component.html',
  styleUrls: ['./burrito-list-page.component.css']
})
export class BurritoListPageComponent implements OnInit {
  filter: Array<Filter> = [];
  reviews: Observable<Burrito>;

  constructor(private burritoService: BurritoService) {

  }

  ngOnInit() {
    this.burritoService.filteredBurritoList.subscribe(data => {
      this.reviews = data;
      console.log(`Burrito list page ${data}`)
    })
  }
}
