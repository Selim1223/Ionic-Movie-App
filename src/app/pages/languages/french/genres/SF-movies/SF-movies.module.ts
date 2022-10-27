import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SFMoviesPageRoutingModule } from './SF-movies-routing.module';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { SFMoviesPage } from './SF-movies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SFMoviesPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [SFMoviesPage]
})
export class SFMoviesPageModule {}
