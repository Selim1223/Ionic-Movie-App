import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetailsService } from 'src/app/services/movie-details/movie-details.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details-de.page.html',
  styleUrls: ['./movie-details-de.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  movie = null;
  credit = null;
  imageBaseUrl = environment.images;

  constructor(private route: ActivatedRoute, private movieDetailsService: MovieDetailsService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieDetailsService.getMovieDetailsDe(id).subscribe(res =>{
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

      this.movieDetailsService.getMovieCredit(id).subscribe(res =>{
        this.credit = res;
        console.log("salut",res);
    });
  }  
}
