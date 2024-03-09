import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAutosAgregarComponent } from './admin-autos-agregar.component';

describe('AdminAutosAgregarComponent', () => {
  let component: AdminAutosAgregarComponent;
  let fixture: ComponentFixture<AdminAutosAgregarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAutosAgregarComponent]
    });
    fixture = TestBed.createComponent(AdminAutosAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
