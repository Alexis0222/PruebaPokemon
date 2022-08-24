import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePokeComponent } from './detalle-poke.component';

describe('DetallePokeComponent', () => {
  let component: DetallePokeComponent;
  let fixture: ComponentFixture<DetallePokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallePokeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallePokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
