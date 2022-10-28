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
export class MovieEsService {

  constructor(private http: HttpClient) { }

  getPopularMoviesEs(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(`${environment.baseURL}/movie/popular?api_key=${environment.apiKey}&page=${page}&language=es`); 
  }

  getListGenreMoviesEs() {
    return this.http.get(`${environment.baseURL}/genre/movie/list?api_key=${environment.apiKey}&language=es`); 
  }

  getActionMoviesEs(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.action}&page=${page}&language=es` 
    );
  }

  getAdventureMoviesEs(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.adventure}&page=${page}&language=es` 
    );
  }

  getAnimationMoviesEs(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.animation}&page=${page}&language=es` 
    );
  }

  getComedyMoviesEs(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.comedy}&page=${page}&language=es` 
    );
  }

  getCrimeMoviesEs(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.crime}&page=${page}&language=es` 
    );
  }

  getDocumentaryMoviesEs(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.documentary}&page=${page}&language=es` 
    );
  }

  getDramaMoviesEs(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.drama}&page=${page}&language=es` 
    );
  }

  getFamilyMoviesEs(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.family}&page=${page}&language=es` 
    );
  }

  getFantasyMoviesEs(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.fantasy}&page=${page}&language=es` 
    );
  }

  getHistoryMoviesEs(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.history}&page=${page}&language=es` 
    );
  }

  getHorrorMoviesEs(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.horror}&page=${page}&language=es` 
    );
  }

  getMusicMoviesEs(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.music}&page=${page}&language=es` 
    );
  }

  getMysteryMoviesEs(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.mystery}&page=${page}&language=es` 
    );
  }

  getRomanceMoviesEs(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.romance}&page=${page}&language=es` 
    );
  }

  getSFMoviesEs(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.SF}&page=${page}&language=es` 
    );
  }

  getTVMoviesEs(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.TVMovie}&page=${page}&language=es` 
    );
  }

  getThrillerMoviesEs(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.thriller}&page=${page}&language=es` 
    );
  }

  getWarMoviesEs(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.war}&page=${page}&language=es` 
    );
  }

  getWesternMoviesEs(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.western}&page=${page}&language=es` 
    );
  }
}
