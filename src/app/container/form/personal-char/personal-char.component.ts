import { Component, EventEmitter, Output } from '@angular/core';
import { DropdownComponent } from '../../../shared/dropdown/dropdown.component';

@Component({
  selector: 'app-personal-char',
  imports: [DropdownComponent],
  templateUrl: './personal-char.component.html',
  styleUrl: './personal-char.component.scss'
})
export class PersonalCharComponent {
  @Output() onClickNext = new EventEmitter;

  salaryContent: string[] = ['< 1 Juta', '1-5 Juta', '5-10 Juta', '10-15 Juta', '15-20 Juta', '> 20 Juta'];
  savingsContent: string[] = ['0%', '1-5%', '5-10%', '10-20%', '20-30%', '> 30%'];
  currencyContent: string[] = ['Rupiah', 'Valuta Asing'];
  accessContent: string[] = ['Perlu', 'Tidak Perlu'];

  buttonNextClick(){
    this.onClickNext.emit();
  }
}
