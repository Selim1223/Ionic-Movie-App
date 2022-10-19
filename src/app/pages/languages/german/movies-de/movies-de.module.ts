import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoviesPageRoutingModule } from './movies-de-routing.module';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { MoviesPage } from './movies-de.page';

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
