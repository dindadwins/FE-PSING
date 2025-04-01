import { Component, OnInit, ViewChild } from '@angular/core';
import { PrivateDataComponent } from './private-data/private-data.component';
import { PersonalCharComponent } from './personal-char/personal-char.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import { DropdownComponent } from '../../shared/dropdown/dropdown.component';
import { StepButtonComponent } from '../../shared/step-button/step-button.component';
import { StepperComponent } from '../../shared/stepper/stepper.component';
import { FormData } from '../../model/data-type';
import { take } from 'rxjs';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    PrivateDataComponent,
    PersonalCharComponent,
    ConfirmationComponent,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    MatButtonModule,
    FormsModule,
    DropdownComponent,
    StepButtonComponent,
    StepperComponent
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit{
  @ViewChild('private') private !: PrivateDataComponent;
  @ViewChild('personal') personal !: PersonalCharComponent;

  componentDisplayed = 'PRIVATE_DATA';
  doneStepOne: boolean = false;
  doneStepTwo: boolean = false;

  formData: FormData = {
    private_data: {
      age: 0,
      gender: '',
      domicile: '',
      job: '',
      marital: '',
      family: '',
    },
    personal_char: {
      purpose: [],
      salary: '',
      savings: '',
      currency: '',
      access: ''
    }
  };

  constructor(
    private router: Router,
    private dataService: DataService
  ){}

  ngOnInit(): void {

  }

  onClickNext(){
    const page = this.componentDisplayed;
    switch(page){
      case 'PRIVATE_DATA':
        this.doneStepOne = true;
        this.componentDisplayed = 'PERSONAL_CHAR';
        this.formData.private_data = this.private.privateData;
        break;
      case 'PERSONAL_CHAR':
        this.doneStepTwo = true;
        this.componentDisplayed = 'CONFIRMATION';
        this.formData.personal_char = this.personal.personalChar;
        break;
      default:
        break;
    }
  }

  onClickPrevious(){
    const page = this.componentDisplayed;
    switch(page){
      case 'PERSONAL_CHAR':
        this.doneStepOne = false;
        this.componentDisplayed = 'PRIVATE_DATA';
        break;
      case 'CONFIRMATION':
        this.doneStepTwo = false;
        this.componentDisplayed = 'PERSONAL_CHAR';
        break;
      default:
        break;
    }
  }

  onClickSubmit(){
    this.dataService.postData(this.formData).pipe(take(1)).subscribe(
      (res) => {
        if(res.error_schema.error_code === 'SUCCESS') {
          this.router.navigateByUrl('savings-prediction/result', {state: res.output_schema});
        }
      }
    );
  }

}
