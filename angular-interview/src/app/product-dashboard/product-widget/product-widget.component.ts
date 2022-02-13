import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../products.model';

@Component({
  selector: 'app-product-widget',
  templateUrl: './product-widget.component.html',
  styleUrls: ['./product-widget.component.scss']
})
export class ProductWidgetComponent implements OnInit {

  @Input() products: Array<Product> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
