import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: any[] = []
  error_message: string = ''

  constructor(private moviesService: MoviesService, private router: Router) {
  }

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe({next: (res: any) => {
      //success logic here
      if (res) {
        this.movies = res.results;
      }
    }, error: (err) => {
      //error logic
      this.error_message = err.error.status_message;
    }})
  }

  openMovie(movie: any) {
    // navigate to /movie/movieid
    this.router.navigate([`/movie/${movie.id}`]);
  }
}
