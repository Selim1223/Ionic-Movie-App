import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SFMoviesPage } from './SF-movies.page';

const routes: Routes = [
  {
    path: '',
    component: SFMoviesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SFMoviesPageRoutingModule {}
