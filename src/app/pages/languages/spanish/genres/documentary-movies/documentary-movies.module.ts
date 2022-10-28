import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocumentaryMoviesPageRoutingModule } from './documentary-movies-routing.module';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { DocumentaryMoviesPage } from './documentary-movies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocumentaryMoviesPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [DocumentaryMoviesPage]
})
export class DocumentaryMoviesPageModule {}
