import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarRequerimientoComponent } from './modal-editar-requerimiento.component';

describe('ModalEditarRequerimientoComponent', () => {
  let component: ModalEditarRequerimientoComponent;
  let fixture: ComponentFixture<ModalEditarRequerimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarRequerimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditarRequerimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
