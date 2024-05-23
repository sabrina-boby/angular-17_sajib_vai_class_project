import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'layout',
    loadChildren: () => import('./pages/layout/layout.module').then(m => m.LayoutModule)
  },
  {
    path: 'material',
    loadChildren: () => import('./pages/material/material.module').then(m => m.MaterialModule)
  },
  {
    path: 'demo-cart',
    loadChildren: () => import('./pages/demo-cart/demo-cart.module').then(m => m.DemoCartModule)
  },
  {
    path: 'package-booking',
    loadChildren: () => import('./pages/package-booking/package-booking.module').then(m => m.PackageBookingModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
