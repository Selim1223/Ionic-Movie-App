import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { MovieEsService } from 'src/app/services/movie-es/movie-es.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-TV-movies',
  templateUrl: './TV-movies.page.html',
  styleUrls: ['./TV-movies.page.scss'],
})
export class TVMoviesPage implements OnInit {
  movies = [];
  genres = null;
  currentPage = 1; 
  imageBaseUrl = environment.images;
  searchTerm : string;

  constructor(private movieEsService: MovieEsService, private loadingctrl: LoadingController) { }

  ngOnInit() {
    this.loadMovies();
    this.ShowGenreMovies();
   }
 
   async loadMovies(event?){
     const loading = await this.loadingctrl.create({
       message: 'Cargando..',
       spinner: 'bubbles',
     });
 
     await loading.present();
 
     this.movieEsService.getTVMoviesEs(this.currentPage).subscribe((res)=>{
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
       this.movieEsService.getListGenreMoviesEs().subscribe(res =>{
         this.genres = res['genres'];
         console.log("liste genre",res['genres']);
     });
   }

}
