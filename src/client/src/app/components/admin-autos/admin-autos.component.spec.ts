import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAutosComponent } from './admin-autos.component';

describe('AdminAutosComponent', () => {
  let component: AdminAutosComponent;
  let fixture: ComponentFixture<AdminAutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAutosComponent]
    });
    fixture = TestBed.createComponent(AdminAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
