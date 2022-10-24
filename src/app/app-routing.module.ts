import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    loadChildren: () => import('./pages/languages/english/movies/movies.module').then( m => m.MoviesPageModule)
  },
  {
    path: 'action-movies',
    loadChildren: () => import('./pages/languages/english/genres/action-movies/action-movies.module').then( m => m.MoviesPageModule)
  },
  {
    path: 'action-movies/:id',
    loadChildren: () => import('./pages/languages/english/movie-details/movie-details.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'movies/:id',
    loadChildren: () => import('./pages/languages/english/movie-details/movie-details.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'movies-fr',
    loadChildren: () => import('./pages/languages/french/movies-fr/movies-fr.module').then( m => m.MoviesPageModule)
  },
  {
    path: 'movies-fr/:id',
    loadChildren: () => import('./pages/languages/french/movie-details-fr/movie-details-fr.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'movies-de',
    loadChildren: () => import('./pages/languages/german/movies-de/movies-de.module').then( m => m.MoviesPageModule)
  },
  {
    path: 'movies-de/:id',
    loadChildren: () => import('./pages/languages/german/movie-details-de/movie-details-de.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'movies-es',
    loadChildren: () => import('./pages/languages/spanish/movies-es/movies-es.module').then( m => m.MoviesPageModule)
  },
  {
    path: 'movies-es/:id',
    loadChildren: () => import('./pages/languages/spanish/movie-details-es/movie-details-es.module').then( m => m.MovieDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
