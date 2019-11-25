import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPelisComponent } from './listar-pelis.component';

describe('ListarPelisComponent', () => {
  let component: ListarPelisComponent;
  let fixture: ComponentFixture<ListarPelisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPelisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPelisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
