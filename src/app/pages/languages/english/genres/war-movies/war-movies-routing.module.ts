import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WarMoviesPage } from './war-movies.page';

const routes: Routes = [
  {
    path: '',
    component: WarMoviesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WarMoviesPageRoutingModule {}
