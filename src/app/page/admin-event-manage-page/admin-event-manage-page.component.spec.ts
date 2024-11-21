import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEventManagePageComponent } from './admin-event-manage-page.component';

describe('AdminEventManagePageComponent', () => {
  let component: AdminEventManagePageComponent;
  let fixture: ComponentFixture<AdminEventManagePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminEventManagePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEventManagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
