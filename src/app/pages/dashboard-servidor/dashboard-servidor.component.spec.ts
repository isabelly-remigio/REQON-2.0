import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardServidorComponent } from './dashboard-servidor.component';

describe('DashboardServidorComponent', () => {
  let component: DashboardServidorComponent;
  let fixture: ComponentFixture<DashboardServidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardServidorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardServidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
