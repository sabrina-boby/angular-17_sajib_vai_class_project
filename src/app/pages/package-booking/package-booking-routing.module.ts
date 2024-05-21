import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackageBookingComponent } from './package-booking.component';

const routes: Routes = [
  {path: '', component: PackageBookingComponent}
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackageBookingRoutingModule { }
