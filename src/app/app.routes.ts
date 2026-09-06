import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./productos/productos.page').then((m) => m.ProductosPage),
  },
];
