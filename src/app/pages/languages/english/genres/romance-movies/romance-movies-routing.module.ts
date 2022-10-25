import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RomanceMoviesPage } from './romance-movies.page';

const routes: Routes = [
  {
    path: '',
    component: RomanceMoviesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RomanceMoviesPageRoutingModule {}
