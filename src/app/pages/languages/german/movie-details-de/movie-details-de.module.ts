import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieDetailsPageRoutingModule } from './movie-details-de-routing.module';

import { MovieDetailsPage } from './movie-details-de.page';

import { IonRatingStarsModule } from 'ion-rating-stars';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieDetailsPageRoutingModule,
    IonRatingStarsModule
  ],
  declarations: [MovieDetailsPage]
})
export class MovieDetailsPageModule {}
