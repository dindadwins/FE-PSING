import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import { DropdownComponent } from '../../shared/dropdown/dropdown.component';
import { FormData } from '../../model/data-type';
import { take } from 'rxjs';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    MatButtonModule,
    FormsModule,
    DropdownComponent
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit{

  customerName: string = '';
  genderContent: string[] = ['Perempuan', 'Laki-laki'];
  domicileContent: string[] = ['Jabodetabek', 'Non Jabodetabek'];
  jobContent: string[] = ['Pelajar', 'Mahasiswa', 'Karyawan Swasta', 'Pengusaha', 'Lainnya'];
  maritalContent: string[] = ['Belum Kawin', 'Kawin'];
  salaryContent: string[] = ['< 1 Juta', '1-5 Juta', '5-10 Juta', '10-15 Juta', '15-20 Juta', '> 20 Juta'];
  savingsContent: string[] = ['0%', '1-5%', '5-10%', '10-20%', '20-30%', '> 30%'];
  ageContent: string[] = ['< 12 tahun', '12-17 tahun', '17-21 tahun', '21-30 tahun', '30-55 tahun', '> 55 tahun'];

  formData: FormData = {
    umur: '',
    gender: '',
    domisili: '',
    profesi: '',
    status_perkawinan: '',
    tujuan: {
      investasi: 0,
      simpanan_jangka_panjang: 0,
      kegiatan_sehari_hari: 0,
      tujuan_lainnya: 0
    },
    penghasilan: '',
    persentase_tabungan: ''
  };

  constructor(
    private router: Router,
    private dataService: DataService
  ){}

  ngOnInit(): void {

  }

  fieldAction(type: string, event: any) {
    switch(type){
      case 'name' :
        this.customerName = event.target.value ?? '';
        break;
      case 'age':
        this.formData.umur = event ?? '';
        break;
      case 'gender':
        this.formData.gender = event ?? '';
        break;
      case 'domicile':
        this.formData.domisili = event ?? '';
        break;
      case 'job':
        this.formData.profesi = event ?? '';
        break;
      case 'marital':
        this.formData.status_perkawinan = event ?? '';
        break;
      case 'salary':
        this.formData.penghasilan = event;
        break;
      case 'savings':
        this.formData.persentase_tabungan = event;
        break;
      default:
        break;
    }
  }

  setPurposeChecked(value: string, event: any){
    switch(value) {
      case 'investasi':
        this.formData.tujuan.investasi = event?.target?.value ? 1 : 0;
        break;
      case 'simpanan_jangka_panjang':
        this.formData.tujuan.simpanan_jangka_panjang = event?.target?.value ? 1 : 0;
        break;
      case 'kegiatan_sehari_hari':
        this.formData.tujuan.kegiatan_sehari_hari = event?.target?.value ? 1 : 0;
        break;
      case 'tujuan_lainnya':
        this.formData.tujuan.tujuan_lainnya = event?.target?.value ? 1 : 0;
        break;
      default:
        break;
    }
  }

  onClickSubmit(){
    console.log(this.formData)
    this.dataService.postData(this.formData).pipe(take(1)).subscribe(
      (res) => {
        this.router.navigateByUrl('savings-prediction/result', {state: res});
      }
    );
  }
}
