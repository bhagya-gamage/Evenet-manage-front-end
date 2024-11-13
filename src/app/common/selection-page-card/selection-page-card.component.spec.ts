import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionPageCardComponent } from './selection-page-card.component';

describe('SelectionPageCardComponent', () => {
  let component: SelectionPageCardComponent;
  let fixture: ComponentFixture<SelectionPageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectionPageCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectionPageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
