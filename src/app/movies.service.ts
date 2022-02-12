import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private readonly http: HttpClient) { }

  getMovies() {
    return this.http.get(`${environment.movie_api_url}/discover/movie`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': environment.bearer_token
      })
    })
  }

  getMovie(movieId: string) {
    return this.http.get(`${environment.movie_api_url}/movie/${movieId}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': environment.bearer_token
      })
    })
  }
}
