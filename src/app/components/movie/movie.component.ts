import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movieId!: string | null;
  movie!: any

  constructor(private activatedRoute: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (params) => {
        console.log(params)
        this.movieId = params.get('movieId')
        if (this.movieId) {
          this.moviesService.getMovie(this.movieId).subscribe({
            next: (res) => {
              this.movie = res
            },
            error: err => {
              console.log(err)
            }
          })
        }
      }
    })
  }

}
