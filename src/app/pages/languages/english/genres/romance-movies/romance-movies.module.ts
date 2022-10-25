import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RomanceMoviesPageRoutingModule } from './romance-movies-routing.module';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { RomanceMoviesPage } from './romance-movies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RomanceMoviesPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [RomanceMoviesPage]
})
export class RomanceMoviesPageModule {}
