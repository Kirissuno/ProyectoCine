import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaPeliComponent } from './nueva-peli.component';

describe('NuevaPeliComponent', () => {
  let component: NuevaPeliComponent;
  let fixture: ComponentFixture<NuevaPeliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaPeliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaPeliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
