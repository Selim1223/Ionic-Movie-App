import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdventureMoviesPage } from './adventure-movies.page';

const routes: Routes = [
  {
    path: '',
    component: AdventureMoviesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdventureMoviesPageRoutingModule {}
