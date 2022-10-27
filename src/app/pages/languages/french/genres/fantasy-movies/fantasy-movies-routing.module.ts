import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FantasyMoviesPage } from './fantasy-movies.page';

const routes: Routes = [
  {
    path: '',
    component: FantasyMoviesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FantasyMoviesPageRoutingModule {}
