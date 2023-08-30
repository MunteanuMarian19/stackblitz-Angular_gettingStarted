import { HttpClient } from '@angular/common/http';
import { Product } from './products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  constructor(private httpp: HttpClient) {}

  addToCart(productt: Product) {
    this.items.push(productt);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.httpp.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
}
