import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from '../../services/common/product.service';
import {FilterData} from '../../interfaces/core/filter-data';
import {Product} from '../../interfaces/common/product.interface';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-demo-cart',
  templateUrl: './demo-cart.component.html',
  styleUrl: './demo-cart.component.scss'
})
export class DemoCartComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  carts: Product[] = [];
  isLoading: boolean = true;

  // Subscriptions
  private subDataOne: Subscription;

  constructor(
    private productService: ProductService
  ) {
  }

  ngOnInit() {
    this.getAllProduct();
  }

  /**
   * HTTP REQ HANDLE
   */

  private getAllProduct() {

    const filterData: FilterData = {
      pagination: {
        pageSize: 9,
        currentPage: 0
      },
      filter: {status: 'publish'},
      filterGroup: null,
      select:{
        name:1,
        slug:1,
        images:1,
        costPrice:1,
        salePrice:1,
        discountType:1,
        discountAmount:1
      },
      sort: {
        createdAt: -1
      }
    }

    this.subDataOne = this.productService.getAllProduct(filterData)
      .subscribe({
        next: (res) => {
          this.products = res.data;
          this.isLoading = false;
        },
        error: (err) => {
          console.log(err);
          this.isLoading = false;
        }
      })
  }


  onAddToCart(data: any) {
    this.carts.push(data);
    console.log('carts', this.carts)
  }

  get grandTotal(): number {
    return this.carts.map(m => m.salePrice).reduce((acc, val) => acc + val, 0);
  }

  ngOnDestroy() {
    if (this.subDataOne) {
      this.subDataOne.unsubscribe();
    }
  }
}
