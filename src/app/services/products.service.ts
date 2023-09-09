import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _products: Product[];

  constructor() {
    this._products = [
      new Product("Lata de Bebida", 800,  "Lata de Bebida CCU"),
      new Product("Pan Aliado",     1050, "Hallulla con Jamón Sandwhich y Queso Gouda"),
      new Product("Café Espresso",  1400, "Vaso de café espresso"),
      new Product("Café Grande",    1800, "Vaso grande de café americano"),
      new Product("Café Mediano",   2000, "Vaso mediano de café americano"),
      new Product("Sopaipilla",     300,  "Clásica sopaipa"),
      new Product("Sopaipleto",     600,  "Sopaipilla con palya y tomate"),
      new Product("Empanada",       600,  "Empanada de queso frita"),
      new Product("Té",             1000, "Vaso de tesito de la máquina nueva"),
    ];
  }

  public get products(): Product[] {
    return this._products;
  }
}
