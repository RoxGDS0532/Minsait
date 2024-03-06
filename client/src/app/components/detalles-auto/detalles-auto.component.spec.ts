import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesAutoComponent } from './detalles-auto.component';

describe('DetallesAutoComponent', () => {
  let component: DetallesAutoComponent;
  let fixture: ComponentFixture<DetallesAutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesAutoComponent]
    });
    fixture = TestBed.createComponent(DetallesAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
