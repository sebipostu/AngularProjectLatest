import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipToSquareSpinnerComponent } from './flip-to-square-spinner.component';

describe('FlipToSquareSpinnerComponent', () => {
  let component: FlipToSquareSpinnerComponent;
  let fixture: ComponentFixture<FlipToSquareSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipToSquareSpinnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipToSquareSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
