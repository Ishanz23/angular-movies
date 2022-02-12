import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) {}

  getMovies() {
    // logic to call the backend and fetch list of movies
    return this.http.get(`${environment.movie_api_url}/discover/movie`, {headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': environment.bearer_token
    }})
  }
}
