import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeologicalproComponent } from './geologicalpro.component';

describe('GeologicalproComponent', () => {
  let component: GeologicalproComponent;
  let fixture: ComponentFixture<GeologicalproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeologicalproComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeologicalproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
