import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts', //"selector:" is where the name of the component it's putted
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent {
  //"prodd" is the name of the property, "@Input()" is the decorater
  @Input() prodd: Product | undefined;
  @Output() notifying = new EventEmitter();
}
