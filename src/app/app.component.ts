import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  public appPages = [
    { title: 'Ingresar', url: '/auth', icon: 'person' },
    { title: 'Productos', url: '/products', icon: 'pricetags' },
    { title: 'Pedidos', url: '/folder/archived', icon: 'archive' },
    { title: 'Asociar tarjeta', url: 'cardform', icon: 'card' },
    { title: 'Favoritos', url: '/folder/favorites', icon: 'heart' },
    { title: 'Ayuda', url: '/folder/spam', icon: 'help' },
    { title: 'Configuración', url: '/folder/outbox', icon: 'settings' },
  ];
  public labels = ['Productos destacados', 'Cafeterias', 'Notas'];

  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  constructor() {}

  public ngOnInit(): void {
    // this.folder = this.activatedRoute.snapshot.params['id'];
  }
}