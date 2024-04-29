import { Component, Input } from '@angular/core';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ProductsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})


export class MainComponent {
  
  modalIsOpen: boolean = false

  toogleModal() {
    this.modalIsOpen = !this.modalIsOpen
  }

  // Variables para almacenar la suma de el producto. 
  countProduct_1: number = 0
  countProduct_2: number = 0
  countProduct_3: number = 0


  // Variable para almacenar la suma total.
  countTotal: number = 0;

  // Método para actualizar el valor de countTotal.
  updateTotal() {
    this.countTotal = this.countProduct_1 + this.countProduct_2 + this.countProduct_3;
  }


  // Funcion que se ejecuta al darle click a el elemento.
  CountsProduct_1() {
    this.countProduct_1 += 3500;
    this.updateTotal(); 
  }
  
  CountsProduct_2() {
    this.countProduct_2 += 8500;
    this.updateTotal(); 
  }

  CountsProduct_3() {
    this.countProduct_3 += 10500;
    this.updateTotal(); 
  }

  

}
