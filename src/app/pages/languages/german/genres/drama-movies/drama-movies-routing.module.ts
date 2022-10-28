import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DramaMoviesPage } from './drama-movies.page';

const routes: Routes = [
  {
    path: '',
    component: DramaMoviesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DramaMoviesPageRoutingModule {}
