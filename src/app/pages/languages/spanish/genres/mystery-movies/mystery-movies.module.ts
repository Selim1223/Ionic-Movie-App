import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MysteryMoviesPageRoutingModule } from './mystery-movies-routing.module';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { MysteryMoviesPage } from './mystery-movies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MysteryMoviesPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [MysteryMoviesPage]
})
export class MysteryMoviesPageModule {}
