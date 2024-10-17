import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskregisterComponent } from './riskregister.component';

describe('RiskregisterComponent', () => {
  let component: RiskregisterComponent;
  let fixture: ComponentFixture<RiskregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiskregisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiskregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
