import { NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stepper',
  imports: [NgIf, NgStyle],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent {
  @Input() stepOneDone: boolean = false;
  @Input() stepTwoDone: boolean = false;
}
