import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { DropdownComponent } from '../../../shared/dropdown/dropdown.component';

@Component({
  selector: 'app-private-data',
  imports: [DropdownComponent],
  templateUrl: './private-data.component.html',
  styleUrl: './private-data.component.scss'
})
export class PrivateDataComponent implements OnInit{
  @ViewChild('genderDropdown') gender !: DropdownComponent;
  @ViewChild('domicileDropdown') domicile !: DropdownComponent;
  @ViewChild('jobDropdown') job !: DropdownComponent;
  @ViewChild('maritalDropdown') marital !: DropdownComponent;
  @ViewChild('familyDropdown') family !: DropdownComponent;
  @Output() onClickNext = new EventEmitter;

  genderContent: string[] = ['Perempuan', 'Laki-laki'];
  domicileContent: string[] = ['Jabodetabek', 'Non Jabodetabek'];
  jobContent: string[] = ['Pelajar', 'Mahasiswa', 'Karyawan Swasta', 'Pengusaha', 'Lainnya'];
  maritalContent: string[] = ['Belum Kawin', 'Kawin'];
  familyContent: string[] = ['0 Jiwa', '1 Jiwa', '2 Jiwa', '3 Jiwa', '> 3 Jiwa'];

  buttonNextClick(){
    this.onClickNext.emit();
  }

  getGender(gender: string){

  }

  ngOnInit(): void {

  }
}
