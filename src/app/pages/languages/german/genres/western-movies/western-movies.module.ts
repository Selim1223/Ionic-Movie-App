import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WesternMoviesPageRoutingModule } from './western-movies-routing.module';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { WesternMoviesPage } from './western-movies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WesternMoviesPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [WesternMoviesPage]
})
export class WesternMoviesPageModule {}
