import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicMoviesPage } from './music-movies.page';

const routes: Routes = [
  {
    path: '',
    component: MusicMoviesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicMoviesPageRoutingModule {}
