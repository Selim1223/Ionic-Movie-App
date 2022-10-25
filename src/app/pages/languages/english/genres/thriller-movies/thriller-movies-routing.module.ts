import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThrillerMoviesPage } from './thriller-movies.page';

const routes: Routes = [
  {
    path: '',
    component: ThrillerMoviesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThrillerMoviesPageRoutingModule {}
