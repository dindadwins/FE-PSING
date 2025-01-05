import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-step-button',
  imports: [NgIf],
  templateUrl: './step-button.component.html',
  styleUrl: './step-button.component.scss'
})
export class StepButtonComponent {
  @Input() isNextAvailable : boolean = true;
  @Input() isBeforeAvailable : boolean = true;
  @Output() previous = new EventEmitter;
  @Output() next = new EventEmitter;

  emitNext() {
    this.next.emit();
  }

  emitPrevious() {
    this.previous.emit();
  }
}
