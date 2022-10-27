import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorrorMoviesPageRoutingModule } from './horror-movies-routing.module';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { HorrorMoviesPage } from './horror-movies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorrorMoviesPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [HorrorMoviesPage]
})
export class HorrorMoviesPageModule {}
