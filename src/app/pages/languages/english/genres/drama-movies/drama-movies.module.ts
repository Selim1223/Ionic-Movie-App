import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DramaMoviesPageRoutingModule } from './drama-movies-routing.module';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { DramaMoviesPage } from './drama-movies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DramaMoviesPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [DramaMoviesPage]
})
export class DramaMoviesPageModule {}
