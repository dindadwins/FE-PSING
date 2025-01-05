import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  imports: [],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.scss'
})
export class ConfirmationComponent {
  @Output() onClickNext = new EventEmitter;

  buttonNextClick(){
    this.onClickNext.emit();
  }
}
