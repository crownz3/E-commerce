import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Output() showCategory = new EventEmitter<string>()

  categories = ['shoes','sports']
  constructor() { }

  ngOnInit(): void {
  }

  onShowCategory(category:string):void{
    this.showCategory.emit(category)
  }

}
