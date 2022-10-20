import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieDetailsPageRoutingModule } from './movie-details-fr-routing.module';

import { MovieDetailsPage } from './movie-details-fr.page';

import { IonRatingStarsModule } from 'ion-rating-stars';

import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieDetailsPageRoutingModule,
    IonRatingStarsModule
  ],
  providers:[YoutubeVideoPlayer ],
  declarations: [MovieDetailsPage]
})
export class MovieDetailsPageModule {}
