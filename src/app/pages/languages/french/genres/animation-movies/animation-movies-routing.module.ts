import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimationMoviesPage } from './animation-movies.page';

const routes: Routes = [
  {
    path: '',
    component: AnimationMoviesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimationMoviesPageRoutingModule {}
