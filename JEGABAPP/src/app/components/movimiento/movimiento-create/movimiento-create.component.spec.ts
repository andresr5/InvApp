import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientoCreateComponent } from './movimiento-create.component';

describe('MovimientoCreateComponent', () => {
  let component: MovimientoCreateComponent;
  let fixture: ComponentFixture<MovimientoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimientoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimientoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
