import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActionMoviesPageRoutingModule } from './action-movies-routing.module';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ActionMoviesPage } from './action-movies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActionMoviesPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [ActionMoviesPage]
})
export class MoviesPageModule {}
