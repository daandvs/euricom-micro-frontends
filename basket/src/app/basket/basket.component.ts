import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'basket-app',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  products = [
    {
      id: 1,
      name: 'Crystal Meth',
      price: '3.5',
      dealerId: 1
    },
    {
      id: 2,
      name: 'Blue Sky',
      price: '5',
      dealerId: 2
    }
  ];

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
