import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movies',
  templateUrl: './movies-es.page.html',
  styleUrls: ['./movies-es.page.scss'],
})
export class MoviesPage implements OnInit {
  movies = [];
  currentPage = 1; 
  imageBaseUrl = environment.images;
  searchTerm : string;

  constructor(private movieService: MovieService, private loadingctrl: LoadingController) { }

  ngOnInit() {
   this.loadMovies();
  }

  async loadMovies(event?){
    const loading = await this.loadingctrl.create({
      message: 'Cargando..',
      spinner: 'bubbles',
    });

    await loading.present();


    this.movieService.getTopRatedMoviesEs(this.currentPage).subscribe((res)=>{
      loading.dismiss();
     // this.movies = [...this.movies,...res.results ]
      this.movies.push(...res.results);
      console.log(res);
      console.log(res.results);

     
      event?.target.complete();
      if (event) {
        event.target.disabled = res.total_pages === this.currentPage;
      }

     
    });
  }

  loadMore(event: InfiniteScrollCustomEvent) {
    this.currentPage++;
    this.loadMovies(event);
  }

}
