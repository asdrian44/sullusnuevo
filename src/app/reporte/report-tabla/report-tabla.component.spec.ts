import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportTablaComponent } from './report-tabla.component';

describe('ReportTablaComponent', () => {
  let component: ReportTablaComponent;
  let fixture: ComponentFixture<ReportTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportTablaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
