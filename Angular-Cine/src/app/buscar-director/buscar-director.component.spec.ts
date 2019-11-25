import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarDirectorComponent } from './buscar-director.component';

describe('BuscarDirectorComponent', () => {
  let component: BuscarDirectorComponent;
  let fixture: ComponentFixture<BuscarDirectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarDirectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
