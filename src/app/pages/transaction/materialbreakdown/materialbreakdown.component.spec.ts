import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialbreakdownComponent } from './materialbreakdown.component';

describe('MaterialbreakdownComponent', () => {
  let component: MaterialbreakdownComponent;
  let fixture: ComponentFixture<MaterialbreakdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialbreakdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialbreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
