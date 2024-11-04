import { Injectable } from '@angular/core';
import { Vehiculo } from './vehiculo.model';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  private url = "https://gist.githubusercontent.com/josejbocanegra/17bb8c76405e43655d551a90800c8a81/raw/d41b4acc3457e51e7533fad6d5e9925ee9676457/202212_MISW4104_Grupo1.json";
  private _vehiculos$ = new BehaviorSubject<Vehiculo[]>([]);
  vehiculos$: Observable<Vehiculo[]> = this._vehiculos$.asObservable();
  

  constructor(private http: HttpClient) { }

  getVehiculos() {
    this.http.get<Vehiculo[]>(this.url).pipe(
      map(vehiculos => {
        return vehiculos;
      })
    ).subscribe(vehiculos => this._vehiculos$.next(vehiculos));
  }
}
