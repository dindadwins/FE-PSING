import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepButtonComponent } from './step-button.component';

describe('StepButtonComponent', () => {
  let component: StepButtonComponent;
  let fixture: ComponentFixture<StepButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
