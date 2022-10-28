import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryMoviesPage } from './history-movies.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryMoviesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryMoviesPageRoutingModule {}
