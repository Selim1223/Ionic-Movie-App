import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";

export interface ApiResult {
  page: number;
  results: any[];
  total_pages: number;
  total_results: number;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getPopularMovies(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(`${environment.baseURL}/movie/popular?api_key=${environment.apiKey}&page=${page}`); 
    //&language=fr 
    //top_rated //upcoming //now_playing 
  }
  
  getListGenreMovies() {
    return this.http.get(`${environment.baseURL}/genre/movie/list?api_key=${environment.apiKey}`); 
  }
 
  getMovieByGenre(): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=27` 
    );
  }

  getActionMovies(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.action}&page=${page}` 
    );
  }

  getAdventureMovies(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.adventure}&page=${page}` 
    );
  }

  getAnimationMovies(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.animation}&page=${page}` 
    );
  }

  getComedyMovies(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.comedy}&page=${page}` 
    );
  }

  getCrimeMovies(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.crime}&page=${page}` 
    );
  }

  getDocumentaryMovies(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.documentary}&page=${page}` 
    );
  }

  getDramaMovies(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.drama}&page=${page}` 
    );
  }

  getFamilyMovies(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.family}&page=${page}` 
    );
  }

  getFantasyMovies(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.fantasy}&page=${page}` 
    );
  }

  getHistoryMovies(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.history}&page=${page}` 
    );
  }

  getHorrorMovies(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.horror}&page=${page}` 
    );
  }

  getMusicMovies(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.music}&page=${page}` 
    );
  }

  getMysteryMovies(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.mystery}&page=${page}` 
    );
  }

  getRomanceMovies(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.romance}&page=${page}` 
    );
  }

  getSFMovies(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.SF}&page=${page}` 
    );
  }

  getTVMovies(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.TVMovie}&page=${page}` 
    );
  }

  getThrillerMovies(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.thriller}&page=${page}` 
    );
  }

  getWarMovies(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.war}&page=${page}` 
    );
  }

  getWesternMovies(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.western}&page=${page}` 
    );
  }
}
