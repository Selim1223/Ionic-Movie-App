import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Component({
  selector: 'app-movie-fr-details',
  templateUrl: './movie-details-fr.page.html',
  styleUrls: ['./movie-details-fr.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  movie = null;
  credit = null;
  imageBaseUrl = environment.images;

  constructor(private route: ActivatedRoute, private movieService: MovieService,private youtubeVideoPlayer: YoutubeVideoPlayer) { }

  
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieDetailsFr(id).subscribe(res =>{
        console.log("coucou", res);
        this.movie = res;
    });

    this.ShowMovieCredits();    
    this.invokeVideoPlayer();
  }

  
  openHomepage(){
    window.open(this.movie.homepage);
  }

  invokeVideoPlayer(){
    const id = this.route.snapshot.paramMap.get('id');
    if(this.movieService.getMovieTrailerFr(id).subscribe(undefined)){
      this.movieService.getMovieTrailer(id).subscribe(res =>{
        this.youtubeVideoPlayer.openVideo(res.results[0]['key']);
        console.log(res);
        console.log(res.results);
        console.log(res.results[0]['key']);
    });
  }
  else{
      this.movieService.getMovieTrailerFr(id).subscribe(res =>{
        this.youtubeVideoPlayer.openVideo(res.results[0]['key']);
        console.log(res);
        console.log(res.results);
        console.log(res.results[0]['key']);
    });
  }
  }  

  ShowMovieCredits(){
    const id = this.route.snapshot.paramMap.get('id');

      this.movieService.getMovieCredit(id).subscribe(res =>{
        this.credit = res;
        console.log("salut",res);
    });
  }  
}
