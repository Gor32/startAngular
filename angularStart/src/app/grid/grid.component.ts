import { Component, OnInit } from '@angular/core';
import { RowModel } from "../rowModel";
import { ROWS } from "../rows";
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  rows = ROWS;
  captions = [1,2,3]
  constructor() { }

  ngOnInit() {
    debugger
  }

}
