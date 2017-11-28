import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCategoriaValorComponent } from './report-categoria-valor.component';

describe('ReportCategoriaValorComponent', () => {
  let component: ReportCategoriaValorComponent;
  let fixture: ComponentFixture<ReportCategoriaValorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportCategoriaValorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportCategoriaValorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
