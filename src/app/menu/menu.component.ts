import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {

  public appPages = [
    { title: 'Menú cafetería', url: '/folder/inbox', icon: 'restaurant' },
    { title: 'Configuración', url: '/folder/outbox', icon: 'cog' },
    { title: 'Favoritos', url: '/folder/favorites', icon: 'heart' },
    { title: 'Pedidos', url: '/folder/archived', icon: 'archive' },
    { title: 'Asociar tarjeta', url: '/folder/trash', icon: 'journal' },
    { title: 'Ayuda', url: '/folder/spam', icon: 'help' },
  ];
  public labels = ['Productos destacados', 'Cafeterias', 'Notas'];
  
  constructor() { }

  ngOnInit() {}

}
