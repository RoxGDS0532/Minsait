import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReservasComponent } from './admin-reservas.component';

describe('AdminReservasComponent', () => {
  let component: AdminReservasComponent;
  let fixture: ComponentFixture<AdminReservasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminReservasComponent]
    });
    fixture = TestBed.createComponent(AdminReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
