import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentaryMoviesPage } from './documentary-movies.page';

const routes: Routes = [
  {
    path: '',
    component: DocumentaryMoviesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentaryMoviesPageRoutingModule {}
