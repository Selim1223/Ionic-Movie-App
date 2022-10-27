import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FamilyMoviesPage } from './family-movies.page';

const routes: Routes = [
  {
    path: '',
    component: FamilyMoviesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FamilyMoviesPageRoutingModule {}
