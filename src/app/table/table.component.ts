import { Component, OnInit } from '@angular/core';
import { MatSort, MatTableDataSource, MatTable } from '@angular/material'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  burritos = new MatTableDataSource()
  displayedColumns: string[] = ['rating', 'order', 'meat', 'beans', 'rice', 'guacamole', 'crema', 'salsa', 'tortilla', 'cheese', 'size', 'taste']

  constructor() { }

  ngOnInit() {
  }

}
