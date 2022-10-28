import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { MovieDeService } from 'src/app/services/movie-de/movie-de.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-horror-movies',
  templateUrl: './horror-movies.page.html',
  styleUrls: ['./horror-movies.page.scss'],
})
export class HorrorMoviesPage implements OnInit {
  movies = [];
  genres = null;
  currentPage = 1; 
  imageBaseUrl = environment.images;
  searchTerm : string;

  constructor(private movieDeService: MovieDeService, private loadingctrl: LoadingController) { }

  ngOnInit() {
    this.loadMovies();
    this.ShowGenreMovies();
   }
 
   async loadMovies(event?){
     const loading = await this.loadingctrl.create({
       message: 'Laden..',
       spinner: 'bubbles',
     });
 
     await loading.present();
 
     this.movieDeService.getHorrorMoviesDe(this.currentPage).subscribe((res)=>{
       loading.dismiss();
      // this.movies = [...this.movies,...res.results ]
       this.movies.push(...res.results);
       //console.log(res['genres'][0]);
       console.log(res);
 
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
 
   ShowGenreMovies(){
       this.movieDeService.getListGenreMoviesDe().subscribe(res =>{
         this.genres = res['genres'];
         console.log("liste genre",res['genres']);
     });
   }

}
