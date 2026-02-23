import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuggestionComponent } from './suggestion/suggestion.component';

@NgModule({
  imports: [
    CommonModule,
    SuggestionComponent   // ✅ ici au lieu de declarations
  ]
})
export class SuggestionsModule { }
