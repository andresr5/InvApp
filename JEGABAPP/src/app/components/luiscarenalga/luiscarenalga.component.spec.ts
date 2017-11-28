import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuiscarenalgaComponent } from './luiscarenalga.component';

describe('LuiscarenalgaComponent', () => {
  let component: LuiscarenalgaComponent;
  let fixture: ComponentFixture<LuiscarenalgaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuiscarenalgaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuiscarenalgaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
