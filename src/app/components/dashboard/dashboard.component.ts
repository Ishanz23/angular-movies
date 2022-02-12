import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  movies: any[] = []
  error_message: string = ''

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit(): void {
    console.log('Dashboard')
    this.moviesService.getMovies().subscribe({next: (res: any) => {
      //success logic here
      console.log(res)
      if (res) {
        this.movies = res.results;
      }
    }, error: (err) => {
      //error logic
      console.log(err.error.status_message);
      this.error_message = err.error.status_message;
    }})
  }
}
