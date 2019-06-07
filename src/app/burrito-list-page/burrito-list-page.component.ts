import { Component, OnInit } from '@angular/core';
import { Filter } from '../shared/models/filter.model';
import { BurritoService } from '../core/services/burrito.service';
import { Burrito } from '../shared/models/burrito.model';
import { Observable, Subject } from 'rxjs';
import { switchMap, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-burrito-list-page',
  templateUrl: './burrito-list-page.component.html',
  styleUrls: ['./burrito-list-page.component.css']
})
export class BurritoListPageComponent implements OnInit {
  filter = new Subject<Filter>()
  reviews: Observable<Burrito[]>

  constructor(private burritoService: BurritoService) {

  }

  ngOnInit() {
    this.reviews = this.filter.pipe(
      startWith({}),
      switchMap(filter => this.burritoService.getBurritosWithFilter(filter))
    )
  }


  onFilterChange(newFilter) {
    console.log(`Filter CHANGED ${JSON.stringify(newFilter)}`)
    this.burritoService.getBurritosWithFilter(newFilter)


    this.filter.next(newFilter)
  }
}
