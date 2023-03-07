import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent implements OnInit {
  sort = ''
  itemsShowCount = 1

  @Output() columnsCountChange = new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
  }

  onSortUpdate(newSort:string):void{
    if(newSort === 'desc'){
      this.sort = 'arrow_upwards'
    } else {
      this.sort = `arrow_downwards`
    }
  }

  onItemsUpdated(newCount:number):void{
    this.itemsShowCount = newCount
  }

  onColumnsUpdated(colNums:number):void{
    this.columnsCountChange.emit(colNums)
  }
}
