import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimationMoviesPageRoutingModule } from './animation-movies-routing.module';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AnimationMoviesPage } from './animation-movies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimationMoviesPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [AnimationMoviesPage]
})
export class AnimationMoviesPageModule {}
