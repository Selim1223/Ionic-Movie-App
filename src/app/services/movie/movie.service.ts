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

  getMovieByGenre(): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/discover/movie?api_key=${environment.apiKey}&with_genres=27` 
    );
  }

  getGenreMovies(): Observable<ApiResult> {
    return this.http.get<ApiResult>(`${environment.baseURL}/genre/movie/list?api_key=${environment.apiKey}`); 
  }
 
  getMovieDetails(id: string) {
    return this.http.get(
      `${environment.baseURL}/movie/${id}?api_key=${environment.apiKey}` //&language=fr
    );
  }

  getMovieTrailer(id: string): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/movie/${id}/videos?api_key=${environment.apiKey}` 
    );
  }

  getMovieCredit(id: string): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/movie/${id}/credits?api_key=${environment.apiKey}` 
    );
  }


  getPopularMoviesFr(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(`${environment.baseURL}/movie/popular?api_key=${environment.apiKey}&page=${page}&language=fr`); 
  }
 
  getMovieDetailsFr(id: string) {
    return this.http.get(
      `${environment.baseURL}/movie/${id}?api_key=${environment.apiKey}&language=fr` 
    );
  }

  getMovieTrailerFr(id: string): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseURL}/movie/${id}/videos?api_key=${environment.apiKey}&language=fr` 
    );
  }

  getPopularMoviesDe(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(`${environment.baseURL}/movie/popular?api_key=${environment.apiKey}&page=${page}&language=de`); 
  }
 
  getMovieDetailsDe(id: string) {
    return this.http.get(
      `${environment.baseURL}/movie/${id}?api_key=${environment.apiKey}&language=de` 
    );
  }

  getPopularMoviesEs(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(`${environment.baseURL}/movie/popular?api_key=${environment.apiKey}&page=${page}&language=es`); 
  }
 
  getMovieDetailsEs(id: string) {
    return this.http.get(
      `${environment.baseURL}/movie/${id}?api_key=${environment.apiKey}&language=es` 
    );
  }

}
