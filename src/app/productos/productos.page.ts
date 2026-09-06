import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonBadge } from '@ionic/angular/standalone';

@Component({
  selector: 'app-productos',
  templateUrl: 'productos.page.html',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonBadge],
})
export class ProductosPage {
  productos = [
    { id: 1, nombre: 'Teclado mecánico', stock: 5 },
    { id: 2, nombre: 'Mouse inalámbrico', stock: 0 },
    { id: 3, nombre: 'Monitor 4K', stock: 3 },
    { id: 4, nombre: 'Webcam HD', stock: 0 },
  ];
}
