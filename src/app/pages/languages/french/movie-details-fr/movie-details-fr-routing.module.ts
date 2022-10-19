import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieDetailsPage } from './movie-details-fr.page';

const routes: Routes = [
  {
    path: '',
    component: MovieDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieDetailsPageRoutingModule {}
