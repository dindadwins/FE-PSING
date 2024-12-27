import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent {
  @Output() onNextPage = new EventEmitter;

  toHomeButton() {
    this.onNextPage.emit();
  }
}
