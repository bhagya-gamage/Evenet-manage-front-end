import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalPageComponent } from './educational-page.component';

describe('EducationalPageComponent', () => {
  let component: EducationalPageComponent;
  let fixture: ComponentFixture<EducationalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationalPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
