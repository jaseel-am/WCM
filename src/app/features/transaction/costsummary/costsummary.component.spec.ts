import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostsummaryComponent } from './costsummary.component';

describe('CostsummaryComponent', () => {
  let component: CostsummaryComponent;
  let fixture: ComponentFixture<CostsummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CostsummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
