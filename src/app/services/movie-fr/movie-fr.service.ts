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
}
