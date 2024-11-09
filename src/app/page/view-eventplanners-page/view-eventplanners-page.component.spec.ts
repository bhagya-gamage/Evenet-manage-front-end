import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEventplannersPageComponent } from './view-eventplanners-page.component';

describe('ViewEventplannersPageComponent', () => {
  let component: ViewEventplannersPageComponent;
  let fixture: ComponentFixture<ViewEventplannersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewEventplannersPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEventplannersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
