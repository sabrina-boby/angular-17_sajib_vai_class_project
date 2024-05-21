import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DemoCartComponent} from './demo-cart.component';

const routes: Routes = [
  {path: '', component: DemoCartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoCartRoutingModule { }
