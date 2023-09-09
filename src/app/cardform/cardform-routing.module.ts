import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardformPage } from './cardform.page';

const routes: Routes = [
  {
    path: '',
    component: CardformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardformPageRoutingModule {}
