import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSelecterComponent } from './dashboard-selecter.component';

describe('DashboardSelecterComponent', () => {
  let component: DashboardSelecterComponent;
  let fixture: ComponentFixture<DashboardSelecterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardSelecterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardSelecterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
