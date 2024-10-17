import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolesectionComponent } from './holesection.component';

describe('HolesectionComponent', () => {
  let component: HolesectionComponent;
  let fixture: ComponentFixture<HolesectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HolesectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolesectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
