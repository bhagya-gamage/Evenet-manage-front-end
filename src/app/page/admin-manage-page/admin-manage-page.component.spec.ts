import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManagePageComponent } from './admin-manage-page.component';

describe('AdminManagePageComponent', () => {
  let component: AdminManagePageComponent;
  let fixture: ComponentFixture<AdminManagePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminManagePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminManagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
