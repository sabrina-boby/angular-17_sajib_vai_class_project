import { Component, OnDestroy, OnInit } from '@angular/core';
import { PackagesService } from '../../services/common/packages.service';
import { Package } from '../../interfaces/common/package.interface';

@Component({
  selector: 'app-package-booking',
  templateUrl: './package-booking.component.html',
  styleUrl: './package-booking.component.scss'
})
export class PackageBookingComponent implements OnInit,OnDestroy {
  package: Package;
  constructor(
    private packagesService:PackagesService
   ){}

   ngOnInit(){
     console.log("ngOnInit...");
     this.getAllPackages();
   }
     
   
   private getAllPackages()
   {
    this.packagesService.getAllPackages()
    .subscribe({

      next:(res)=>{
        this.package=res.data;
        console.log('res=== ',res)
      },
      error:(err)=>{
        console.log('res=== ',err)
      }
    })
   }

   ngOnDestroy(){
     console.log("distroy done...")
   }
}
