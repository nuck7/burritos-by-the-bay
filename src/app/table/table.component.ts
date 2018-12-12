import { Component, OnInit } from '@angular/core';
import { MatSort, MatTableDataSource, MatTable } from '@angular/material'
import { BurritoService } from '../core/services/burrito.service'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  burritos = new MatTableDataSource()
  displayedColumns: string[] = ['restaurant_name', 'order', 'cost', 'meat_type', 'meat', 'beans_type', 'beans', 'rice', 'guacamole_type', 'guacamole', 'crema', 'salsa', 'tortilla', 'cheese', 'size', 'taste', 'overall_rating', 'date'] //'other', 'picture',, 'comments', 'yelp_link']

  constructor(private burritoService: BurritoService) { }

  ngOnInit() {
    /*this.burritoService.getBurritoReviews()
      .subscribe(reviews => {
        let tempArray = []
        reviews.forEach(review => {
          tempArray.push(review)
          console.log(`REVIEW: ${JSON.stringify(review.data())}`)
        })
        this.burritos.data = tempArray
      })*/
      
        this.burritos.data = this.burritoService.burritos
  }
}
