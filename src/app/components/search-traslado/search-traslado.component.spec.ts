import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTrasladoComponent } from './search-traslado.component';

describe('SearchTrasladoComponent', () => {
  let component: SearchTrasladoComponent;
  let fixture: ComponentFixture<SearchTrasladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchTrasladoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTrasladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
