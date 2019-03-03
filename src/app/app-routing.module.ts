import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewComponent } from './review/review.component';
import { TableComponent } from './table/table.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { BurritoListPageComponent } from './burrito-list-page/burrito-list-page.component';

const routes: Routes = [
  {
    path: 'review',
    component: BurritoListPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'table',
    component: TableComponent,
    pathMatch: 'full'
  },
  {
    path: 'form',
    component: ReviewFormComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'review',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
