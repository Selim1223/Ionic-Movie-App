import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThrillerMoviesPageRoutingModule } from './thriller-movies-routing.module';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ThrillerMoviesPage } from './thriller-movies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThrillerMoviesPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [ThrillerMoviesPage]
})
export class ThrillerMoviesPageModule {}
