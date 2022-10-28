import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FamilyMoviesPageRoutingModule } from './family-movies-routing.module';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { FamilyMoviesPage } from './family-movies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FamilyMoviesPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [FamilyMoviesPage]
})
export class FamilyMoviesPageModule {}
