import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full',
  },
  ///en
  {
    path: 'movies',
    loadChildren: () => import('./pages/languages/english/movies/movies.module').then( m => m.MoviesPageModule)
  },
  {
    path: 'movies/:id',
    loadChildren: () => import('./pages/languages/english/movie-details/movie-details.module').then( m => m.MovieDetailsPageModule)
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
    path: 'adventure-movies',
    loadChildren: () => import('./pages/languages/english/genres/adventure-movies/adventure-movies.module').then( m => m.AdventureMoviesPageModule)
  },
  {
    path: 'adventure-movies/:id',
    loadChildren: () => import('./pages/languages/english/movie-details/movie-details.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'animation-movies',
    loadChildren: () => import('./pages/languages/english/genres/animation-movies/animation-movies.module').then( m => m.AnimationMoviesPageModule)
  },
  {
    path: 'animation-movies/:id',
    loadChildren: () => import('./pages/languages/english/movie-details/movie-details.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'comedy-movies',
    loadChildren: () => import('./pages/languages/english/genres/comedy-movies/comedy-movies.module').then( m => m.ComedyMoviesPageModule)
  },
  {
    path: 'comedy-movies/:id',
    loadChildren: () => import('./pages/languages/english/movie-details/movie-details.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'crime-movies',
    loadChildren: () => import('./pages/languages/english/genres/crime-movies/crime-movies.module').then( m => m.CrimeMoviesPageModule)
  },
  {
    path: 'crime-movies/:id',
    loadChildren: () => import('./pages/languages/english/movie-details/movie-details.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'documentary-movies',
    loadChildren: () => import('./pages/languages/english/genres/documentary-movies/documentary-movies.module').then( m => m.DocumentaryMoviesPageModule)
  },
  {
    path: 'documentary-movies/:id',
    loadChildren: () => import('./pages/languages/english/movie-details/movie-details.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'drama-movies',
    loadChildren: () => import('./pages/languages/english/genres/drama-movies/drama-movies.module').then( m => m.DramaMoviesPageModule)
  },
  {
    path: 'drama-movies/:id',
    loadChildren: () => import('./pages/languages/english/movie-details/movie-details.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'family-movies',
    loadChildren: () => import('./pages/languages/english/genres/family-movies/family-movies.module').then( m => m.FamilyMoviesPageModule)
  },
  {
    path: 'family-movies/:id',
    loadChildren: () => import('./pages/languages/english/movie-details/movie-details.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'fantasy-movies',
    loadChildren: () => import('./pages/languages/english/genres/fantasy-movies/fantasy-movies.module').then( m => m.FantasyMoviesPageModule)
  },
  {
    path: 'fantasy-movies/:id',
    loadChildren: () => import('./pages/languages/english/movie-details/movie-details.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'history-movies',
    loadChildren: () => import('./pages/languages/english/genres/history-movies/history-movies.module').then( m => m.HistoryMoviesPageModule)
  },
  {
    path: 'history-movies/:id',
    loadChildren: () => import('./pages/languages/english/movie-details/movie-details.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'horror-movies',
    loadChildren: () => import('./pages/languages/english/genres/horror-movies/horror-movies.module').then( m => m.HorrorMoviesPageModule)
  },
  {
    path: 'horror-movies/:id',
    loadChildren: () => import('./pages/languages/english/movie-details/movie-details.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'music-movies',
    loadChildren: () => import('./pages/languages/english/genres/music-movies/music-movies.module').then( m => m.MusicMoviesPageModule)
  },
  {
    path: 'music-movies/:id',
    loadChildren: () => import('./pages/languages/english/movie-details/movie-details.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'mystery-movies',
    loadChildren: () => import('./pages/languages/english/genres/mystery-movies/mystery-movies.module').then( m => m.MysteryMoviesPageModule)
  },
  {
    path: 'mystery-movies/:id',
    loadChildren: () => import('./pages/languages/english/movie-details/movie-details.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'romance-movies',
    loadChildren: () => import('./pages/languages/english/genres/romance-movies/romance-movies.module').then( m => m.RomanceMoviesPageModule)
  },
  {
    path: 'romance-movies/:id',
    loadChildren: () => import('./pages/languages/english/movie-details/movie-details.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'SF-movies',
    loadChildren: () => import('./pages/languages/english/genres/SF-movies/SF-movies.module').then( m => m.SFMoviesPageModule)
  },
  {
    path: 'SF-movies/:id',
    loadChildren: () => import('./pages/languages/english/movie-details/movie-details.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'TV-movies',
    loadChildren: () => import('./pages/languages/english/genres/TV-movies/TV-movies.module').then( m => m.TVMoviesPageModule)
  },
  {
    path: 'TV-movies/:id',
    loadChildren: () => import('./pages/languages/english/movie-details/movie-details.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'thriller-movies',
    loadChildren: () => import('./pages/languages/english/genres/thriller-movies/thriller-movies.module').then( m => m.ThrillerMoviesPageModule)
  },
  {
    path: 'thriller-movies/:id',
    loadChildren: () => import('./pages/languages/english/movie-details/movie-details.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'war-movies',
    loadChildren: () => import('./pages/languages/english/genres/war-movies/war-movies.module').then( m => m.WarMoviesPageModule)
  },
  {
    path: 'war-movies/:id',
    loadChildren: () => import('./pages/languages/english/movie-details/movie-details.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'western-movies',
    loadChildren: () => import('./pages/languages/english/genres/western-movies/western-movies.module').then( m => m.WesternMoviesPageModule)
  },
  {
    path: 'western-movies/:id',
    loadChildren: () => import('./pages/languages/english/movie-details/movie-details.module').then( m => m.MovieDetailsPageModule)
  },

    ///fr
  {
    path: 'movies-fr',
    loadChildren: () => import('./pages/languages/french/movies-fr/movies-fr.module').then( m => m.MoviesPageModule)
  },
  {
    path: 'movies-fr/:id',
    loadChildren: () => import('./pages/languages/french/movie-details-fr/movie-details-fr.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'action-movies-fr',
    loadChildren: () => import('./pages/languages/french/genres/action-movies/action-movies.module').then( m => m.MoviesPageModule)
  },
  {
    path: 'action-movies-fr/:id',
    loadChildren: () => import('./pages/languages/french/movie-details-fr/movie-details-fr.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'adventure-movies-fr',
    loadChildren: () => import('./pages/languages/french/genres/adventure-movies/adventure-movies.module').then( m => m.AdventureMoviesPageModule)
  },
  {
    path: 'adventure-movies-fr/:id',
    loadChildren: () => import('./pages/languages/french/movie-details-fr/movie-details-fr.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'animation-movies-fr',
    loadChildren: () => import('./pages/languages/french/genres/animation-movies/animation-movies.module').then( m => m.AnimationMoviesPageModule)
  },
  {
    path: 'animation-movies-fr/:id',
    loadChildren: () => import('./pages/languages/french/movie-details-fr/movie-details-fr.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'comedy-movies-fr',
    loadChildren: () => import('./pages/languages/french/genres/comedy-movies/comedy-movies.module').then( m => m.ComedyMoviesPageModule)
  },
  {
    path: 'comedy-movies-fr/:id',
    loadChildren: () => import('./pages/languages/french/movie-details-fr/movie-details-fr.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'crime-movies-fr',
    loadChildren: () => import('./pages/languages/french/genres/crime-movies/crime-movies.module').then( m => m.CrimeMoviesPageModule)
  },
  {
    path: 'crime-movies-fr/:id',
    loadChildren: () => import('./pages/languages/french/movie-details-fr/movie-details-fr.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'documentary-movies-fr',
    loadChildren: () => import('./pages/languages/french/genres/documentary-movies/documentary-movies.module').then( m => m.DocumentaryMoviesPageModule)
  },
  {
    path: 'documentary-movies-fr/:id',
    loadChildren: () => import('./pages/languages/french/movie-details-fr/movie-details-fr.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'drama-movies-fr',
    loadChildren: () => import('./pages/languages/french/genres/drama-movies/drama-movies.module').then( m => m.DramaMoviesPageModule)
  },
  {
    path: 'drama-movies-fr/:id',
    loadChildren: () => import('./pages/languages/french/movie-details-fr/movie-details-fr.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'family-movies-fr',
    loadChildren: () => import('./pages/languages/french/genres/family-movies/family-movies.module').then( m => m.FamilyMoviesPageModule)
  },
  {
    path: 'family-movies-fr/:id',
    loadChildren: () => import('./pages/languages/french/movie-details-fr/movie-details-fr.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'fantasy-movies-fr',
    loadChildren: () => import('./pages/languages/french/genres/fantasy-movies/fantasy-movies.module').then( m => m.FantasyMoviesPageModule)
  },
  {
    path: 'fantasy-movies-fr/:id',
    loadChildren: () => import('./pages/languages/french/movie-details-fr/movie-details-fr.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'history-movies-fr',
    loadChildren: () => import('./pages/languages/french/genres/history-movies/history-movies.module').then( m => m.HistoryMoviesPageModule)
  },
  {
    path: 'history-movies-fr/:id',
    loadChildren: () => import('./pages/languages/french/movie-details-fr/movie-details-fr.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'horror-movies-fr',
    loadChildren: () => import('./pages/languages/french/genres/horror-movies/horror-movies.module').then( m => m.HorrorMoviesPageModule)
  },
  {
    path: 'horror-movies-fr/:id',
    loadChildren: () => import('./pages/languages/french/movie-details-fr/movie-details-fr.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'music-movies-fr',
    loadChildren: () => import('./pages/languages/french/genres/music-movies/music-movies.module').then( m => m.MusicMoviesPageModule)
  },
  {
    path: 'music-movies-fr/:id',
    loadChildren: () => import('./pages/languages/french/movie-details-fr/movie-details-fr.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'mystery-movies-fr',
    loadChildren: () => import('./pages/languages/french/genres/mystery-movies/mystery-movies.module').then( m => m.MysteryMoviesPageModule)
  },
  {
    path: 'mystery-movies-fr/:id',
    loadChildren: () => import('./pages/languages/french/movie-details-fr/movie-details-fr.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'romance-movies-fr',
    loadChildren: () => import('./pages/languages/french/genres/romance-movies/romance-movies.module').then( m => m.RomanceMoviesPageModule)
  },
  {
    path: 'romance-movies-fr/:id',
    loadChildren: () => import('./pages/languages/french/movie-details-fr/movie-details-fr.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'SF-movies-fr',
    loadChildren: () => import('./pages/languages/french/genres/SF-movies/SF-movies.module').then( m => m.SFMoviesPageModule)
  },
  {
    path: 'SF-movies-fr/:id',
    loadChildren: () => import('./pages/languages/french/movie-details-fr/movie-details-fr.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'TV-movies-fr',
    loadChildren: () => import('./pages/languages/french/genres/TV-movies/TV-movies.module').then( m => m.TVMoviesPageModule)
  },
  {
    path: 'TV-movies-fr/:id',
    loadChildren: () => import('./pages/languages/french/movie-details-fr/movie-details-fr.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'thriller-movies-fr',
    loadChildren: () => import('./pages/languages/french/genres/thriller-movies/thriller-movies.module').then( m => m.ThrillerMoviesPageModule)
  },
  {
    path: 'thriller-movies-fr/:id',
    loadChildren: () => import('./pages/languages/french/movie-details-fr/movie-details-fr.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'war-movies-fr',
    loadChildren: () => import('./pages/languages/french/genres/war-movies/war-movies.module').then( m => m.WarMoviesPageModule)
  },
  {
    path: 'war-movies-fr/:id',
    loadChildren: () => import('./pages/languages/french/movie-details-fr/movie-details-fr.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'western-movies-fr',
    loadChildren: () => import('./pages/languages/french/genres/western-movies/western-movies.module').then( m => m.WesternMoviesPageModule)
  },
  {
    path: 'western-movies-fr/:id',
    loadChildren: () => import('./pages/languages/french/movie-details-fr/movie-details-fr.module').then( m => m.MovieDetailsPageModule)
  },

///de
  {
    path: 'movies-de',
    loadChildren: () => import('./pages/languages/german/movies-de/movies-de.module').then( m => m.MoviesPageModule)
  },
  {
    path: 'movies-de/:id',
    loadChildren: () => import('./pages/languages/german/movie-details-de/movie-details-de.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'action-movies-de',
    loadChildren: () => import('./pages/languages/german/genres/action-movies/action-movies.module').then( m => m.MoviesPageModule)
  },
  {
    path: 'action-movies-de/:id',
    loadChildren: () => import('./pages/languages/german/movie-details-de/movie-details-de.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'adventure-movies-de',
    loadChildren: () => import('./pages/languages/german/genres/adventure-movies/adventure-movies.module').then( m => m.AdventureMoviesPageModule)
  },
  {
    path: 'adventure-movies-de/:id',
    loadChildren: () => import('./pages/languages/german/movie-details-de/movie-details-de.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'animation-movies-de',
    loadChildren: () => import('./pages/languages/german/genres/animation-movies/animation-movies.module').then( m => m.AnimationMoviesPageModule)
  },
  {
    path: 'animation-movies-de/:id',
    loadChildren: () => import('./pages/languages/german/movie-details-de/movie-details-de.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'comedy-movies-de',
    loadChildren: () => import('./pages/languages/german/genres/comedy-movies/comedy-movies.module').then( m => m.ComedyMoviesPageModule)
  },
  {
    path: 'comedy-movies-de/:id',
    loadChildren: () => import('./pages/languages/german/movie-details-de/movie-details-de.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'crime-movies-de',
    loadChildren: () => import('./pages/languages/german/genres/crime-movies/crime-movies.module').then( m => m.CrimeMoviesPageModule)
  },
  {
    path: 'crime-movies-de/:id',
    loadChildren: () => import('./pages/languages/german/movie-details-de/movie-details-de.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'documentary-movies-de',
    loadChildren: () => import('./pages/languages/german/genres/documentary-movies/documentary-movies.module').then( m => m.DocumentaryMoviesPageModule)
  },
  {
    path: 'documentary-movies-de/:id',
    loadChildren: () => import('./pages/languages/german/movie-details-de/movie-details-de.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'drama-movies-de',
    loadChildren: () => import('./pages/languages/german/genres/drama-movies/drama-movies.module').then( m => m.DramaMoviesPageModule)
  },
  {
    path: 'drama-movies-de/:id',
    loadChildren: () => import('./pages/languages/german/movie-details-de/movie-details-de.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'family-movies-de',
    loadChildren: () => import('./pages/languages/german/genres/family-movies/family-movies.module').then( m => m.FamilyMoviesPageModule)
  },
  {
    path: 'family-movies-de/:id',
    loadChildren: () => import('./pages/languages/german/movie-details-de/movie-details-de.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'fantasy-movies-de',
    loadChildren: () => import('./pages/languages/german/genres/fantasy-movies/fantasy-movies.module').then( m => m.FantasyMoviesPageModule)
  },
  {
    path: 'fantasy-movies-de/:id',
    loadChildren: () => import('./pages/languages/german/movie-details-de/movie-details-de.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'history-movies-de',
    loadChildren: () => import('./pages/languages/german/genres/history-movies/history-movies.module').then( m => m.HistoryMoviesPageModule)
  },
  {
    path: 'history-movies-de/:id',
    loadChildren: () => import('./pages/languages/german/movie-details-de/movie-details-de.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'horror-movies-de',
    loadChildren: () => import('./pages/languages/german/genres/horror-movies/horror-movies.module').then( m => m.HorrorMoviesPageModule)
  },
  {
    path: 'horror-movies-de/:id',
    loadChildren: () => import('./pages/languages/german/movie-details-de/movie-details-de.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'music-movies-de',
    loadChildren: () => import('./pages/languages/german/genres/music-movies/music-movies.module').then( m => m.MusicMoviesPageModule)
  },
  {
    path: 'music-movies-de/:id',
    loadChildren: () => import('./pages/languages/german/movie-details-de/movie-details-de.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'mystery-movies-de',
    loadChildren: () => import('./pages/languages/german/genres/mystery-movies/mystery-movies.module').then( m => m.MysteryMoviesPageModule)
  },
  {
    path: 'mystery-movies-de/:id',
    loadChildren: () => import('./pages/languages/german/movie-details-de/movie-details-de.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'romance-movies-de',
    loadChildren: () => import('./pages/languages/german/genres/romance-movies/romance-movies.module').then( m => m.RomanceMoviesPageModule)
  },
  {
    path: 'romance-movies-de/:id',
    loadChildren: () => import('./pages/languages/german/movie-details-de/movie-details-de.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'SF-movies-de',
    loadChildren: () => import('./pages/languages/german/genres/SF-movies/SF-movies.module').then( m => m.SFMoviesPageModule)
  },
  {
    path: 'SF-movies-de/:id',
    loadChildren: () => import('./pages/languages/german/movie-details-de/movie-details-de.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'TV-movies-de',
    loadChildren: () => import('./pages/languages/german/genres/TV-movies/TV-movies.module').then( m => m.TVMoviesPageModule)
  },
  {
    path: 'TV-movies-de/:id',
    loadChildren: () => import('./pages/languages/german/movie-details-de/movie-details-de.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'thriller-movies-de',
    loadChildren: () => import('./pages/languages/german/genres/thriller-movies/thriller-movies.module').then( m => m.ThrillerMoviesPageModule)
  },
  {
    path: 'thriller-movies-de/:id',
    loadChildren: () => import('./pages/languages/german/movie-details-de/movie-details-de.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'war-movies-de',
    loadChildren: () => import('./pages/languages/german/genres/war-movies/war-movies.module').then( m => m.WarMoviesPageModule)
  },
  {
    path: 'war-movies-de/:id',
    loadChildren: () => import('./pages/languages/german/movie-details-de/movie-details-de.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'western-movies-de',
    loadChildren: () => import('./pages/languages/german/genres/western-movies/western-movies.module').then( m => m.WesternMoviesPageModule)
  },
  {
    path: 'western-movies-de/:id',
    loadChildren: () => import('./pages/languages/german/movie-details-de/movie-details-de.module').then( m => m.MovieDetailsPageModule)
  },

 ///es
  {
    path: 'movies-es',
    loadChildren: () => import('./pages/languages/spanish/movies-es/movies-es.module').then( m => m.MoviesPageModule)
  },
  {
    path: 'movies-es/:id',
    loadChildren: () => import('./pages/languages/spanish/movie-details-es/movie-details-es.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'action-movies-es',
    loadChildren: () => import('./pages/languages/spanish/genres/action-movies/action-movies.module').then( m => m.MoviesPageModule)
  },
  {
    path: 'action-movies-es/:id',
    loadChildren: () => import('./pages/languages/spanish/movie-details-es/movie-details-es.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'adventure-movies-es',
    loadChildren: () => import('./pages/languages/spanish/genres/adventure-movies/adventure-movies.module').then( m => m.AdventureMoviesPageModule)
  },
  {
    path: 'adventure-movies-es/:id',
    loadChildren: () => import('./pages/languages/spanish/movie-details-es/movie-details-es.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'animation-movies-es',
    loadChildren: () => import('./pages/languages/spanish/genres/animation-movies/animation-movies.module').then( m => m.AnimationMoviesPageModule)
  },
  {
    path: 'animation-movies-es/:id',
    loadChildren: () => import('./pages/languages/spanish/movie-details-es/movie-details-es.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'comedy-movies-es',
    loadChildren: () => import('./pages/languages/spanish/genres/comedy-movies/comedy-movies.module').then( m => m.ComedyMoviesPageModule)
  },
  {
    path: 'comedy-movies-es/:id',
    loadChildren: () => import('./pages/languages/spanish/movie-details-es/movie-details-es.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'crime-movies-es',
    loadChildren: () => import('./pages/languages/spanish/genres/crime-movies/crime-movies.module').then( m => m.CrimeMoviesPageModule)
  },
  {
    path: 'crime-movies-es/:id',
    loadChildren: () => import('./pages/languages/spanish/movie-details-es/movie-details-es.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'documentary-movies-es',
    loadChildren: () => import('./pages/languages/spanish/genres/documentary-movies/documentary-movies.module').then( m => m.DocumentaryMoviesPageModule)
  },
  {
    path: 'documentary-movies-es/:id',
    loadChildren: () => import('./pages/languages/spanish/movie-details-es/movie-details-es.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'drama-movies-es',
    loadChildren: () => import('./pages/languages/spanish/genres/drama-movies/drama-movies.module').then( m => m.DramaMoviesPageModule)
  },
  {
    path: 'drama-movies-es/:id',
    loadChildren: () => import('./pages/languages/spanish/movie-details-es/movie-details-es.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'family-movies-es',
    loadChildren: () => import('./pages/languages/spanish/genres/family-movies/family-movies.module').then( m => m.FamilyMoviesPageModule)
  },
  {
    path: 'family-movies-es/:id',
    loadChildren: () => import('./pages/languages/spanish/movie-details-es/movie-details-es.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'fantasy-movies-es',
    loadChildren: () => import('./pages/languages/spanish/genres/fantasy-movies/fantasy-movies.module').then( m => m.FantasyMoviesPageModule)
  },
  {
    path: 'fantasy-movies-es/:id',
    loadChildren: () => import('./pages/languages/spanish/movie-details-es/movie-details-es.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'history-movies-es',
    loadChildren: () => import('./pages/languages/spanish/genres/history-movies/history-movies.module').then( m => m.HistoryMoviesPageModule)
  },
  {
    path: 'history-movies-es/:id',
    loadChildren: () => import('./pages/languages/spanish/movie-details-es/movie-details-es.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'horror-movies-es',
    loadChildren: () => import('./pages/languages/spanish/genres/horror-movies/horror-movies.module').then( m => m.HorrorMoviesPageModule)
  },
  {
    path: 'horror-movies-es/:id',
    loadChildren: () => import('./pages/languages/spanish/movie-details-es/movie-details-es.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'music-movies-es',
    loadChildren: () => import('./pages/languages/spanish/genres/music-movies/music-movies.module').then( m => m.MusicMoviesPageModule)
  },
  {
    path: 'music-movies-es/:id',
    loadChildren: () => import('./pages/languages/spanish/movie-details-es/movie-details-es.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'mystery-movies-es',
    loadChildren: () => import('./pages/languages/spanish/genres/mystery-movies/mystery-movies.module').then( m => m.MysteryMoviesPageModule)
  },
  {
    path: 'mystery-movies-es/:id',
    loadChildren: () => import('./pages/languages/spanish/movie-details-es/movie-details-es.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'romance-movies-es',
    loadChildren: () => import('./pages/languages/spanish/genres/romance-movies/romance-movies.module').then( m => m.RomanceMoviesPageModule)
  },
  {
    path: 'romance-movies-es/:id',
    loadChildren: () => import('./pages/languages/spanish/movie-details-es/movie-details-es.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'SF-movies-es',
    loadChildren: () => import('./pages/languages/spanish/genres/SF-movies/SF-movies.module').then( m => m.SFMoviesPageModule)
  },
  {
    path: 'SF-movies-es/:id',
    loadChildren: () => import('./pages/languages/spanish/movie-details-es/movie-details-es.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'TV-movies-es',
    loadChildren: () => import('./pages/languages/spanish/genres/TV-movies/TV-movies.module').then( m => m.TVMoviesPageModule)
  },
  {
    path: 'TV-movies-es/:id',
    loadChildren: () => import('./pages/languages/spanish/movie-details-es/movie-details-es.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'thriller-movies-es',
    loadChildren: () => import('./pages/languages/spanish/genres/thriller-movies/thriller-movies.module').then( m => m.ThrillerMoviesPageModule)
  },
  {
    path: 'thriller-movies-es/:id',
    loadChildren: () => import('./pages/languages/spanish/movie-details-es/movie-details-es.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'war-movies-es',
    loadChildren: () => import('./pages/languages/spanish/genres/war-movies/war-movies.module').then( m => m.WarMoviesPageModule)
  },
  {
    path: 'war-movies-es/:id',
    loadChildren: () => import('./pages/languages/spanish/movie-details-es/movie-details-es.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'western-movies-es',
    loadChildren: () => import('./pages/languages/spanish/genres/western-movies/western-movies.module').then( m => m.WesternMoviesPageModule)
  },
  {
    path: 'western-movies-es/:id',
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
