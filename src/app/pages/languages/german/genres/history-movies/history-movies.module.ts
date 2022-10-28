import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryMoviesPageRoutingModule } from './history-movies-routing.module';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { HistoryMoviesPage } from './history-movies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryMoviesPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [HistoryMoviesPage]
})
export class HistoryMoviesPageModule {}
