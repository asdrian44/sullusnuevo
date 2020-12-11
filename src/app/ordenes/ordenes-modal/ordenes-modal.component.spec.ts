import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenesModalComponent } from './ordenes-modal.component';

describe('OrdenesModalComponent', () => {
  let component: OrdenesModalComponent;
  let fixture: ComponentFixture<OrdenesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenesModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
