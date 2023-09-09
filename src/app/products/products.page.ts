import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  public products: Product[] = [];

  constructor(
    private productsService: ProductsService,
    private router:          Router
  ) { }

  public ngOnInit(): void {
    this.products = this.productsService.products;
  }

  public goToProductDetail(product: Product) {
    const navigationExtras: NavigationExtras = {
      state: {
        product
      }
    };
    this.router.navigate([`products/product`], navigationExtras);
  }

}
