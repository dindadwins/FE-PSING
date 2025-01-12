import { Component, OnInit } from '@angular/core';
import { PrivateDataComponent } from './private-data/private-data.component';
import { PersonalCharComponent } from './personal-char/personal-char.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DropdownComponent } from '../../shared/dropdown/dropdown.component';
import { StepButtonComponent } from '../../shared/step-button/step-button.component';
import { StepperComponent } from '../../shared/stepper/stepper.component';

@Component({
  selector: 'app-form',
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
    StepperComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit{
  componentDisplayed = 'PRIVATE_DATA';
  doneStepOne: boolean = false;
  doneStepTwo: boolean = false;

  constructor(private router: Router){}

  ngOnInit(): void {

  }

  onClickNext(){
    const page = this.componentDisplayed;
    switch(page){
      case 'PRIVATE_DATA':
        this.doneStepOne = true;
        this.componentDisplayed = 'PERSONAL_CHAR';
        break;
      case 'PERSONAL_CHAR':
        this.doneStepTwo = true;
        this.componentDisplayed = 'CONFIRMATION';
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

}
