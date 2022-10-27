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
export class MovieFrService {

  constructor(private http: HttpClient) { }

  getPopularMoviesFr(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(`${environment.baseURL}/movie/popular?api_key=${environment.apiKey}&page=${page}&language=fr`); 
  }
  
  getListGenreMoviesFr() {
    return this.http.get(`${environment.baseURL}/genre/movie/list?api_key=${environment.apiKey}&language=fr`); 
  }

  getActionMoviesFr(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.action}&page=${page}&language=fr` 
    );
  }

  getAdventureMoviesFr(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.adventure}&page=${page}&language=fr` 
    );
  }

  getAnimationMoviesFr(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.animation}&page=${page}&language=fr` 
    );
  }

  getComedyMoviesFr(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.comedy}&page=${page}&language=fr` 
    );
  }

  getCrimeMoviesFr(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.crime}&page=${page}&language=fr` 
    );
  }

  getDocumentaryMoviesFr(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.documentary}&page=${page}&language=fr` 
    );
  }

  getDramaMoviesFr(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.drama}&page=${page}&language=fr` 
    );
  }

  getFamilyMoviesFr(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.family}&page=${page}&language=fr` 
    );
  }

  getFantasyMoviesFr(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.fantasy}&page=${page}&language=fr` 
    );
  }

  getHistoryMoviesFr(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.history}&page=${page}&language=fr` 
    );
  }

  getHorrorMoviesFr(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.horror}&page=${page}&language=fr` 
    );
  }

  getMusicMoviesFr(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.music}&page=${page}&language=fr` 
    );
  }

  getMysteryMoviesFr(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.mystery}&page=${page}&language=fr` 
    );
  }

  getRomanceMoviesFr(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.romance}&page=${page}&language=fr` 
    );
  }

  getSFMoviesFr(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.SF}&page=${page}&language=fr` 
    );
  }

  getTVMoviesFr(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.TVMovie}&page=${page}&language=fr` 
    );
  }

  getThrillerMoviesFr(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.thriller}&page=${page}&language=fr` 
    );
  }

  getWarMoviesFr(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.war}&page=${page}&language=fr` 
    );
  }

  getWesternMoviesFr(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=${environment.western}&page=${page}&language=fr` 
    );
  }
}
