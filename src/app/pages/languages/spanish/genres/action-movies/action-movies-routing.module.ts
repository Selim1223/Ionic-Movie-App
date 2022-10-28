import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionMoviesPage } from './action-movies.page';

const routes: Routes = [
  {
    path: '',
    component: ActionMoviesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActionMoviesPageRoutingModule {}
