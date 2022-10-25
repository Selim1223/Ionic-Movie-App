import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FantasyMoviesPageRoutingModule } from './fantasy-movies-routing.module';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { FantasyMoviesPage } from './fantasy-movies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FantasyMoviesPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [FantasyMoviesPage]
})
export class FantasyMoviesPageModule {}
