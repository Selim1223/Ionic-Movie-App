import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TVMoviesPageRoutingModule } from './TV-movies-routing.module';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { TVMoviesPage } from './TV-movies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TVMoviesPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [TVMoviesPage]
})
export class TVMoviesPageModule {}
