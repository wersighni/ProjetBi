import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [

  { path: 'home', component: HomeComponent },

  {
    path: 'product',
    loadComponent: () =>
      import('./product/product.component').then(m => m.ProductComponent)
  },

  // /suggestion → /suggestions
  { path: 'suggestion', redirectTo: 'suggestions', pathMatch: 'full' },

  // module suggestions (lazy)
  {
    path: 'suggestions',
    loadChildren: () =>
      import('./suggestions/suggestions.module').then(m => m.SuggestionsModule)
  },

  // ✅ AUTH USER FORM
  {
    path: 'auth-user',
    loadComponent: () =>
      import('./auth-user/auth-user.component')
        .then(m => m.AuthUserComponent)
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // Not Found
  {
    path: '**',
    loadComponent: () =>
      import('./not-found/not-found.component').then(m => m.NotFoundComponent)
  }

];