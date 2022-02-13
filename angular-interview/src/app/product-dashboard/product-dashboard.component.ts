import { Component, OnInit } from '@angular/core';
import { Product } from './products.model';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {

productsData: Array<Product> = [
  { name: 'Laptop', price: 100000 },
  { name: 'Mobile', price: 15000 },
  { name: 'Keyboard', price: 1500 },
  { name: 'Mouse', price: 1000 },
];
otherPoductsData: Array<Product> = [
  { name: 'CPU', price: 100000 },
  { name: 'HDD', price: 15000 },
  { name: 'SDD', price: 1500 },
  { name: 'HDMI', price: 1000 },
];
  constructor() { }

  ngOnInit(): void {
  }

}
