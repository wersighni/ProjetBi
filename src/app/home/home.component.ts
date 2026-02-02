import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ pour ngModel

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ ajoute FormsModule ici
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  searchText: string = '';   // ✅ variable liée à l'input (ngModel)
  titleColor: string = 'red'; // ✅ si tu veux changer couleur du titre avec ngModel

  home = [
    { id: 1, name: 'iphone15', price: 2000, quantity: 5 },
    { id: 2, name: 'iphone16', price: 3000, quantity: 8 },
    { id: 3, name: 'iphone15', price: 2000, quantity: 5 }
  ];

  buy(p: { id: number; name: string; price: number; quantity: number; }) {
    if (p.quantity > 0) {
      p.quantity--; // exemple: diminuer quantité
    }
  }
}
