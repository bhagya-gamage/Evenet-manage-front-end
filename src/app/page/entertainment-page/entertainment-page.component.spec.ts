import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentPageComponent } from './entertainment-page.component';

describe('EntertainmentPageComponent', () => {
  let component: EntertainmentPageComponent;
  let fixture: ComponentFixture<EntertainmentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntertainmentPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntertainmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
