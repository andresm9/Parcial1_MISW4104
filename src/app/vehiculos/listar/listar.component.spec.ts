import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarComponent } from './listar.component';
import { MockVehiculoService } from '../vehiculos.service.spec';
import { Vehiculo } from '../vehiculo.model';
import { VehiculosService } from '../vehiculos.service';

describe('ListarComponent', () => {
  let component: ListarComponent;
  let fixture: ComponentFixture<ListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarComponent],
      providers: [
        { provide: VehiculosService, useClass: MockVehiculoService}
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //probar que el servicio Mock genera 3 elementos en la tabla
  it('should be 3 elements', () => { 
    const rows = fixture.nativeElement.querySelectorAll("table tbody tr").length;
    expect(rows).toBe(3)
  });
});
