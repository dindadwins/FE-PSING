import { Component, OnInit } from '@angular/core';
import { DropdownComponent } from '../../../shared/dropdown/dropdown.component';
import { PrivateData } from '../../../model/data-type';

@Component({
  selector: 'app-private-data',
  imports: [DropdownComponent],
  templateUrl: './private-data.component.html',
  styleUrl: './private-data.component.scss'
})
export class PrivateDataComponent implements OnInit{

  genderContent: string[] = ['Perempuan', 'Laki-laki'];
  domicileContent: string[] = ['Jabodetabek', 'Non Jabodetabek'];
  jobContent: string[] = ['Pelajar', 'Mahasiswa', 'Karyawan Swasta', 'Pengusaha', 'Lainnya'];
  maritalContent: string[] = ['Belum Kawin', 'Kawin'];
  familyContent: string[] = ['0 Jiwa', '1 Jiwa', '2 Jiwa', '3 Jiwa', '> 3 Jiwa'];

  customerName: string = '';
  privateData: PrivateData = {
    age: 0,
    gender: '',
    domicile: '',
    job: '',
    marital: '',
    family: '',
  }

  fieldAction(type: string, event: any) {
    switch(type) {
      case 'name' :
        this.customerName = event.target.value ?? '';
        break;
      case 'age':
        this.privateData.age = event.target.value ?? 0;
        break;
      case 'gender':
        this.privateData.gender = event ?? '';
        break;
      case 'domicile':
        this.privateData.domicile = event ?? '';
        break;
      case 'job':
        this.privateData.job = event ?? '';
        break;
      case 'marital':
        this.privateData.marital = event ?? '';
        break;
      case 'family':
        this.privateData.family = event ?? '';
        break;
      default:
        break;
    }
  }

  ngOnInit(): void {

  }
}
