import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent implements OnInit {
  @Input() fullWidthMode = false


  constructor() { }

  ngOnInit(): void {
  }


  onAddtoCart():void{

  }
}
