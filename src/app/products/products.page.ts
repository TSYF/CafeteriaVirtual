import { Component, OnInit, inject } from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  
  products: Product[] = [];

  constructor( 
    private productsService: ProductsService, 
    private router: Router 
  ) {}

  async ngOnInit() {
    // await this.productsService.getProducts().subscribe(
    //   (data) => {
    //     this.products = data
    //   });
    await this.getProducts();
    
  }

  getProducts(){
    this.productsService.getProducts().subscribe(
      (data) => {
        this.products = data
      });
    
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
