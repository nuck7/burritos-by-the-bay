import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BurritoService } from '../core/services/burrito.service';
import { Filter } from '../shared/models/filter.model';
import { BeansTypeOptions, GuacamoleTypeOptions, MeatTypeOptions } from '../../environments/environment';
import { FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Output() filterChange: EventEmitter<Filter> = new EventEmitter()

  beans_type_options = BeansTypeOptions;
  guacamole_type_options = GuacamoleTypeOptions
  meat_type_options = MeatTypeOptions;

  filterForm = new FormGroup({
    meat_type: new FormControl(''),
    cost: new FormControl(''),
    restaurant_name: new FormControl(''),
    order: new FormControl(''), 
    comments: new FormControl(''),
    meat: new FormControl(''),
    beans_type: new FormControl(''),
    beans: new FormControl(''),
    rice: new FormControl(''),
    guacamole_type: new FormControl(''),
    guacamole: new FormControl(''),
    crema: new FormControl(''),
    salsa: new FormControl(''),
    tortilla: new FormControl(''),
    cheese: new FormControl(''),
    other: new FormControl(''),
    size: new FormControl(''),
    taste: new FormControl(''),
    overall_rating: new FormControl(''),
    date: new FormControl(''),

  })

  constructor(private burritoService: BurritoService) { }

  ngOnInit() {
  }

  emitFilterChange(filter) {
    console.log(`Filter change: ${JSON.stringify(this.filterForm.value)}`)

    //this.filterChange.emit(filter)
  }
}
