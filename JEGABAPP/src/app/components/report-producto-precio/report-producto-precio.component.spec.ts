import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportProductoPrecioComponent } from './report-producto-precio.component';

describe('ReportProductoPrecioComponent', () => {
  let component: ReportProductoPrecioComponent;
  let fixture: ComponentFixture<ReportProductoPrecioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportProductoPrecioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportProductoPrecioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
