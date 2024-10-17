import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CementingComponent } from './cementing.component';

describe('CementingComponent', () => {
  let component: CementingComponent;
  let fixture: ComponentFixture<CementingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CementingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CementingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
