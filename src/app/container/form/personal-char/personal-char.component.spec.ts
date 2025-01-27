import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCharComponent } from './personal-char.component';

describe('PersonalCharComponent', () => {
  let component: PersonalCharComponent;
  let fixture: ComponentFixture<PersonalCharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalCharComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalCharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
