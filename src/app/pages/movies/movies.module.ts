import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoviesPageRoutingModule } from './movies-routing.module';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { MoviesPage } from './movies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoviesPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [MoviesPage]
})
export class MoviesPageModule {}
