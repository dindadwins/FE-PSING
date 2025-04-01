import { Component, OnInit } from '@angular/core';
import { DropdownComponent } from '../../../shared/dropdown/dropdown.component';
import { CheckedValue, PersonalChar } from '../../../model/data-type';

@Component({
  selector: 'app-personal-char',
  imports: [DropdownComponent],
  templateUrl: './personal-char.component.html',
  styleUrl: './personal-char.component.scss'
})
export class PersonalCharComponent implements OnInit{

  salaryContent: string[] = ['< 1 Juta', '1-5 Juta', '5-10 Juta', '10-15 Juta', '15-20 Juta', '> 20 Juta'];
  savingsContent: string[] = ['0%', '1-5%', '5-10%', '10-20%', '20-30%', '> 30%'];
  currencyContent: string[] = ['Rupiah', 'Valuta Asing'];
  accessContent: string[] = ['Perlu', 'Tidak Perlu'];

  personalChar : PersonalChar = {
    purpose: [],
    salary: '',
    savings: '',
    currency: '',
    access: ''
  };

  purposeChecked: CheckedValue[] = [
    {value: 'invests', is_checked: false},
    {value: 'long_term', is_checked: false},
    {value: 'daily', is_checked: false},
    {value: 'others', is_checked: false}
  ]

  ngOnInit(): void {

  }

  fieldAction(type: string, event: any) {
    switch(type){
      case 'purpose':
        this.setPurposeChecked(event.target.value, event.target.checked);
        this.setPersonalPurpose();
        break;
      case 'salary':
        this.personalChar.salary = event;
        break;
      case 'savings':
        this.personalChar.savings = event;
        break;
      case 'currency':
        this.personalChar.currency = event;
        break;
      case 'access':
        this.personalChar.access = event;
        break;
      default:
        break;
    }
  }

  setPurposeChecked(value: string, is_checked: boolean){
    this.purposeChecked.forEach(item => {
      if(item.value === value) {
        item.is_checked = is_checked;
      }
    });
  }

  setPersonalPurpose(){
    this.personalChar.purpose = [];
    this.purposeChecked.forEach(item => {
      if(item.is_checked) {
        this.personalChar.purpose.push(item.value);
      }
    });
  }
}
