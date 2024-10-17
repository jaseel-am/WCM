import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopeofwellComponent } from './scopeofwell.component';

describe('ScopeofwellComponent', () => {
  let component: ScopeofwellComponent;
  let fixture: ComponentFixture<ScopeofwellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScopeofwellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScopeofwellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
