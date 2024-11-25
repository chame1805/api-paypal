import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-metodo',
  templateUrl: './metodo-pago.component.html',
  styleUrls: ['./metodo-pago.component.css']
})
export class MetodoComponent implements OnInit {
  costoTotal: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Obtener el parámetro 'costo' de la URL
    this.route.queryParams.subscribe(params => {
      this.costoTotal = params['costo'];  // El valor del costo total que pasamos desde 'reserva'
      console.log('Costo total recibido:', this.costoTotal);
    });
  }
}
