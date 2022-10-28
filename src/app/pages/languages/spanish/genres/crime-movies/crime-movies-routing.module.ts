import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrimeMoviesPage } from './crime-movies.page';

const routes: Routes = [
  {
    path: '',
    component: CrimeMoviesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrimeMoviesPageRoutingModule {}
