import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Menú cafetería', url: '/folder/inbox', icon: 'restaurant' },
    { title: 'Configuración', url: '/folder/outbox', icon: 'cog' },
    { title: 'Favoritos', url: '/folder/favorites', icon: 'heart' },
    { title: 'Pedidos', url: '/folder/archived', icon: 'archive' },
    { title: 'Asociar tarjeta', url: '/folder/trash', icon: 'journal' },
    { title: 'Ayuda', url: '/folder/spam', icon: 'help' },
  ];
  public labels = ['Productos destacados', 'Cafeterias', 'Notas'];
  constructor() {}
}