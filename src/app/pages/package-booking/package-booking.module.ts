import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackageBookingRoutingModule } from './package-booking-routing.module';
import { PackageBookingComponent } from './package-booking.component';


@NgModule({
  declarations: [
    PackageBookingComponent
  ],
  imports: [
    CommonModule,
    PackageBookingRoutingModule
  ]
})
export class PackageBookingModule { }
