import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  itemss = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    adress: '',
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit(): void {
    // Process checkout data here
    this.itemss = this.cartService.clearCart();
    console.warn('Your order has been submited', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
