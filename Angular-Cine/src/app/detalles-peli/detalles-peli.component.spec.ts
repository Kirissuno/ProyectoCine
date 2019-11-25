import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPeliComponent } from './detalles-peli.component';

describe('DetallesPeliComponent', () => {
  let component: DetallesPeliComponent;
  let fixture: ComponentFixture<DetallesPeliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesPeliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesPeliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
