import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BossPanelComponent } from './boss-panel.component';

describe('BossPanelComponent', () => {
  let component: BossPanelComponent;
  let fixture: ComponentFixture<BossPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BossPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BossPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
