import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoporatePageComponent } from './coporate-page.component';

describe('CoporatePageComponent', () => {
  let component: CoporatePageComponent;
  let fixture: ComponentFixture<CoporatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoporatePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoporatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
