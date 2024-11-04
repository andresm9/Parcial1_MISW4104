import { TestBed } from '@angular/core/testing';

import { VehiculosService } from './vehiculos.service';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { Vehiculo } from './vehiculo.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';   


/**
 * Crear un Mock del servicio de Vehiculos
 */
export class MockVehiculoService {

  private _vehiculos$ = new BehaviorSubject<Vehiculo[]>([]);
  vehiculos$: Observable<Vehiculo[]> = this._vehiculos$.asObservable();

  getVehiculos() { 

    const vehiculos: Vehiculo[] = [
      { id: 0, marca: "BMW", linea: "Sport", referencia: "001", modelo: 2020, kilometraje: 1500, color: "azul", imagen: "https://placehold.co/600x400?text=Prueba1"},
      { id: 1, marca: "Mercedes", linea: "SUV", referencia: "GL30", modelo: 2021, kilometraje: 1500, color: "blanco", imagen: "https://placehold.co/600x400?text=Mercedes"},
      { id: 2, marca: "Ferrari", linea: "Sport", referencia: "Diablo", modelo: 2022, kilometraje: 1500, color: "rojo", imagen: "https://placehold.co/600x400?text=Ferrari"}
    ]

    return of(vehiculos).pipe(
      map(vehiculos => {
        return vehiculos;
      })
    ).subscribe(vehiculos => this._vehiculos$.next(vehiculos));
  }
}

describe('VehiculosService', () => {
  let service: VehiculosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(VehiculosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
