import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo.model';
import { VehiculosService } from '../vehiculos.service';

@Component({
  selector: 'listar-vehiculos',
  standalone: true,
  imports: [],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit {

  vehiculos: Vehiculo[] = [];
  cuentaMarcas?: Map<string, number>;

  constructor(private service: VehiculosService) { }

  ngOnInit(): void {

    this.service.vehiculos$.subscribe(data => {
      this.vehiculos = data;
      this.cuentaMarcas = this.service.getMarcas(data)
    });

    this.service.getVehiculos();

  }

}
