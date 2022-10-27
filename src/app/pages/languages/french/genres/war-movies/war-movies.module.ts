import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WarMoviesPageRoutingModule } from './war-movies-routing.module';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { WarMoviesPage } from './war-movies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WarMoviesPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [WarMoviesPage]
})
export class WarMoviesPageModule {}
