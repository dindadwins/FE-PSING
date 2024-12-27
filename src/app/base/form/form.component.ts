import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  @Output() onNextPage = new EventEmitter;

  toResultButton() {
    this.onNextPage.emit();
  }
}
