import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrimeMoviesPageRoutingModule } from './crime-movies-routing.module';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { CrimeMoviesPage } from './crime-movies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrimeMoviesPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [CrimeMoviesPage]
})
export class CrimeMoviesPageModule {}
