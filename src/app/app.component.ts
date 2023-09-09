import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  public appPages = [
    { title: 'Menú cafetería', url: '/folder/inbox', icon: 'restaurant' },
    { title: 'Configuración', url: '/folder/outbox', icon: 'cog' },
    { title: 'Favoritos', url: '/folder/favorites', icon: 'heart' },
    { title: 'Pedidos', url: '/folder/archived', icon: 'archive' },
    { title: 'Asociar tarjeta', url: '/folder/trash', icon: 'journal' },
    { title: 'Ayuda', url: '/folder/spam', icon: 'help' },
    { title: 'Ingresar', url: '/auth/signIn', icon: 'heart' },
    { title: 'Registrarse', url: '/auth/signUp', icon: 'heart' },
  ];
  public labels = ['Productos destacados', 'Cafeterias', 'Notas'];

  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  constructor() {}

  public ngOnInit(): void {
    // this.folder = this.activatedRoute.snapshot.params['id'];
  }
}