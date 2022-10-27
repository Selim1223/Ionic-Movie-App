import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdventureMoviesPageRoutingModule } from './adventure-movies-routing.module';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AdventureMoviesPage } from './adventure-movies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdventureMoviesPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [AdventureMoviesPage]
})
export class AdventureMoviesPageModule {}
