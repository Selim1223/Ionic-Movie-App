import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { MovieFrService } from 'src/app/services/movie-fr/movie-fr.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-crime-movies',
  templateUrl: './crime-movies.page.html',
  styleUrls: ['./crime-movies.page.scss'],
})
export class CrimeMoviesPage implements OnInit {
  movies = [];
  genres = null;
  currentPage = 1; 
  imageBaseUrl = environment.images;
  searchTerm : string;

  constructor(private movieFrService: MovieFrService, private loadingctrl: LoadingController) { }

  ngOnInit() {
    this.loadMovies();
    this.ShowGenreMovies();
   }
 
   async loadMovies(event?){
     const loading = await this.loadingctrl.create({
       message: 'Chargement en cours..',
       spinner: 'bubbles',
     });
 
     await loading.present();
 
     this.movieFrService.getCrimeMoviesFr(this.currentPage).subscribe((res)=>{
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
       this.movieFrService.getListGenreMoviesFr().subscribe(res =>{
         this.genres = res['genres'];
         console.log("liste genre",res['genres']);
     });
   }

}
