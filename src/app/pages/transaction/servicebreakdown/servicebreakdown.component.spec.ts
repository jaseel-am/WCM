import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicebreakdownComponent } from './servicebreakdown.component';

describe('ServicebreakdownComponent', () => {
  let component: ServicebreakdownComponent;
  let fixture: ComponentFixture<ServicebreakdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicebreakdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicebreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
