import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BurritoService } from '../core/services/burrito.service';
import { Filter } from '../shared/models/filter.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  filter: Array<Filter> = []
  constructor(private burritoService: BurritoService) { }

  ngOnInit() {
  }

  getBurritosWithFilter(filter) {
    //this.filter.push('Nick', 'Chu')
    this.burritoService.getBurritosWithFilter(filter)
  }
}
