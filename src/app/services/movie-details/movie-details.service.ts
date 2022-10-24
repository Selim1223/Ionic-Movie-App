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
export class MovieDetailsService {

  constructor(private http: HttpClient) { }

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

  getMovieCredit(id: string) {
    return this.http.get(
      `${environment.baseURL}/movie/${id}/credits?api_key=${environment.apiKey}` 
    );
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

  getMovieDetailsDe(id: string) {
    return this.http.get(
      `${environment.baseURL}/movie/${id}?api_key=${environment.apiKey}&language=de` 
    );
  }

  getMovieDetailsEs(id: string) {
    return this.http.get(
      `${environment.baseURL}/movie/${id}?api_key=${environment.apiKey}&language=es` 
    );
  }
}
