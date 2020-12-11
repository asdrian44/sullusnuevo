import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRequerimientoComponent } from './modal-requerimiento.component';

describe('ModalRequerimientoComponent', () => {
  let component: ModalRequerimientoComponent;
  let fixture: ComponentFixture<ModalRequerimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRequerimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRequerimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
