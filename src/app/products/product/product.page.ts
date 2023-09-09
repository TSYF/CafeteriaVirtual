import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Navigation, ParamMap } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  public product?: Product;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    const navigation: Navigation | null = this.router.getCurrentNavigation();

    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {

      if (navigation?.extras?.state) {
        this.product = navigation.extras.state["product"];
        console.log(this.product);
      }
      
    })
  }

  ngOnInit() {
  }

}
