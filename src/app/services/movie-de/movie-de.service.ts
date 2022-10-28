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
export class MovieDeService {

  constructor(private http: HttpClient) { }

  getPopularMoviesDe(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(`${environment.baseURL}/movie/popular?api_key=${environment.apiKey}&page=${page}&language=de`); 
  }

  getListGenreMoviesDe() {
    return this.http.get(`${environment.baseURL}/genre/movie/list?api_key=${environment.apiKey}&language=de`); 
  }

  getActionMoviesDe(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.action}&page=${page}&language=de` 
    );
  }

  getAdventureMoviesDe(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.adventure}&page=${page}&language=de` 
    );
  }

  getAnimationMoviesDe(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.animation}&page=${page}&language=de` 
    );
  }

  getComedyMoviesDe(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.comedy}&page=${page}&language=de` 
    );
  }

  getCrimeMoviesDe(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.crime}&page=${page}&language=de` 
    );
  }

  getDocumentaryMoviesDe(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.documentary}&page=${page}&language=de` 
    );
  }

  getDramaMoviesDe(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.drama}&page=${page}&language=de` 
    );
  }

  getFamilyMoviesDe(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.family}&page=${page}&language=de` 
    );
  }

  getFantasyMoviesDe(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.fantasy}&page=${page}&language=de` 
    );
  }

  getHistoryMoviesDe(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.history}&page=${page}&language=de` 
    );
  }

  getHorrorMoviesDe(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.horror}&page=${page}&language=de` 
    );
  }

  getMusicMoviesDe(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.music}&page=${page}&language=de` 
    );
  }

  getMysteryMoviesDe(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.mystery}&page=${page}&language=de` 
    );
  }

  getRomanceMoviesDe(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.romance}&page=${page}&language=de` 
    );
  }

  getSFMoviesDe(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.SF}&page=${page}&language=de` 
    );
  }

  getTVMoviesDe(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.TVMovie}&page=${page}&language=de` 
    );
  }

  getThrillerMoviesDe(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.thriller}&page=${page}&language=de` 
    );
  }

  getWarMoviesDe(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.war}&page=${page}&language=de` 
    );
  }

  getWesternMoviesDe(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.western}&page=${page}&language=de` 
    );
  }
}
