import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorrorMoviesPage } from './horror-movies.page';

const routes: Routes = [
  {
    path: '',
    component: HorrorMoviesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorrorMoviesPageRoutingModule {}
