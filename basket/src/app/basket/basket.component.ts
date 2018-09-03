import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'basket-app',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  products = [];

  constructor() { }

  ngOnInit() {

  }

  remove(product) {
    const index = this.products.indexOf(product);
    if (index > -1) {
      this.products.splice(index, 1);
    }
  }
}
