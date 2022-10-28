import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicMoviesPageRoutingModule } from './music-movies-routing.module';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { MusicMoviesPage } from './music-movies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicMoviesPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [MusicMoviesPage]
})
export class MusicMoviesPageModule {}
