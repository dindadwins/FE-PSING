import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { ResultComponent } from './result/result.component';

@Component({
  selector: 'app-base',
  imports: [CommonModule, HomeComponent, FormComponent, ResultComponent],
  templateUrl: './base.component.html',
  styleUrl: './base.component.scss'
})
export class BaseComponent {
  componentDisplayed: string = 'HOME';

  changeComponentDisplayed(page: string){
    this.componentDisplayed = page;
  }
}
