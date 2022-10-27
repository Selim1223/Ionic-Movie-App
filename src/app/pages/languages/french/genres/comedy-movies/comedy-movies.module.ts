import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComedyMoviesPageRoutingModule } from './comedy-movies-routing.module';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ComedyMoviesPage } from './comedy-movies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComedyMoviesPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [ComedyMoviesPage]
})
export class ComedyMoviesPageModule {}
