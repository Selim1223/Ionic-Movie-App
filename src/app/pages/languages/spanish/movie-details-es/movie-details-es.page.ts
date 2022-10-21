import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie/movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details-es.page.html',
  styleUrls: ['./movie-details-es.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  movie = null;
  credit = null;
  imageBaseUrl = environment.images;

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieDetailsEs(id).subscribe(res =>{
        console.log(res);
        this.movie = res;
    });

    this.ShowMovieCredits();    
  }

  
  openHomepage(){
    window.open(this.movie.homepage);
  }

  ShowMovieCredits(){
    const id = this.route.snapshot.paramMap.get('id');

      this.movieService.getMovieCredit(id).subscribe(res =>{
        this.credit = res;
        console.log("salut",res);
    });
  } 
}
