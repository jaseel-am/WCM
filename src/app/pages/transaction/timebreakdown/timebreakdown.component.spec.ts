import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimebreakdownComponent } from './timebreakdown.component';

describe('TimebreakdownComponent', () => {
  let component: TimebreakdownComponent;
  let fixture: ComponentFixture<TimebreakdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimebreakdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimebreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
