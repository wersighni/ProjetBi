import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Suggestion } from '../../Models/suggestion';

@Component({
  selector: 'app-list-suggestion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-suggestion.component.html',
  styleUrl: './list-suggestion.component.css'
})
export class ListSuggestionComponent {

  searchText: string = ''; // 🔍 barre de recherche

  suggestions: Suggestion[] = [
    {
      id: 1,
      title: 'Organiser une journée team building',
      description: "Suggestion pour organiser une journée de team building.",
      category: 'Événements',
      date: new Date('2025-01-20'),
      status: 'acceptee',
      nbLikes: 10
    },
    {
      id: 2,
      title: 'Améliorer le système de réservation',
      description: 'Proposition pour améliorer les réservations.',
      category: 'Technologie',
      date: new Date('2025-01-15'),
      status: 'refusee',
      nbLikes: 0
    },
    {
      id: 3,
      title: 'Créer un système de récompenses',
      description: 'Programme de récompenses.',
      category: 'Ressources Humaines',
      date: new Date('2025-01-25'),
      status: 'refusee',
      nbLikes: 0
    }
  ];

  favorites: Suggestion[] = [];

  // ✅ FILTRAGE PAR TITRE OU CATÉGORIE
  get filteredSuggestions(): Suggestion[] {
    return this.suggestions.filter(s =>
      s.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
      s.category.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  like(s: Suggestion) {
    s.nbLikes++;
  }

  addToFavorites(s: Suggestion) {
    if (!this.favorites.some(f => f.id === s.id)) {
      this.favorites.push(s);
    }
  }
}
