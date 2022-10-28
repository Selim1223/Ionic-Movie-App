import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComedyMoviesPage } from './comedy-movies.page';

const routes: Routes = [
  {
    path: '',
    component: ComedyMoviesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComedyMoviesPageRoutingModule {}
