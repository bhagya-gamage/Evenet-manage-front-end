import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventplannerPageComponent } from './add-eventplanner-page.component';

describe('AddEventplannerPageComponent', () => {
  let component: AddEventplannerPageComponent;
  let fixture: ComponentFixture<AddEventplannerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEventplannerPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEventplannerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
