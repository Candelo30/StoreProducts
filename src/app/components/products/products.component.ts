import { Component, Input } from '@angular/core';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
    // Envio de datos a otro componete.

    @Input() producto_1: number = 0;
    @Input() producto_2: number = 0;
    @Input() producto_3: number = 0;
    @Input() TotalProducts: number = 0;
}
