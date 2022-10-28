import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WesternMoviesPage } from './western-movies.page';

const routes: Routes = [
  {
    path: '',
    component: WesternMoviesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WesternMoviesPageRoutingModule {}
