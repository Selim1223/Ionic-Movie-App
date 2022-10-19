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

  getTopRatedMovies(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(`${environment.baseURL}/movie/popular?api_key=${environment.apiKey}&page=${page}`); //&language=fr
  }
 
  getMovieDetails(id: string) {
    return this.http.get(
      `${environment.baseURL}/movie/${id}?api_key=${environment.apiKey}` //&language=fr
    );
  }

  getTopRatedMoviesFr(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(`${environment.baseURL}/movie/popular?api_key=${environment.apiKey}&page=${page}&language=fr`); 
  }
 
  getMovieDetailsFr(id: string) {
    return this.http.get(
      `${environment.baseURL}/movie/${id}?api_key=${environment.apiKey}&language=fr` 
    );
  }

  getTopRatedMoviesDe(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(`${environment.baseURL}/movie/popular?api_key=${environment.apiKey}&page=${page}&language=de`); 
  }
 
  getMovieDetailsDe(id: string) {
    return this.http.get(
      `${environment.baseURL}/movie/${id}?api_key=${environment.apiKey}&language=de` 
    );
  }

  getTopRatedMoviesEs(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(`${environment.baseURL}/movie/popular?api_key=${environment.apiKey}&page=${page}&language=es`); 
  }
 
  getMovieDetailsEs(id: string) {
    return this.http.get(
      `${environment.baseURL}/movie/${id}?api_key=${environment.apiKey}&language=es` 
    );
  }


  getGenreMovies(): Observable<ApiResult>{
    return this.http.get<ApiResult>(
      `${environment.baseURL}/genre/movie/list?api_key=${environment.apiKey}` //&language=fr
    );
  }

}
