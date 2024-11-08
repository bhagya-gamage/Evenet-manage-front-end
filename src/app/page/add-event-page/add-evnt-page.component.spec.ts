import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEvntPageComponent } from './add-evnt-page.component';

describe('AddEvntPageComponent', () => {
  let component: AddEvntPageComponent;
  let fixture: ComponentFixture<AddEvntPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEvntPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEvntPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
