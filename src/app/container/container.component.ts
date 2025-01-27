import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { ResultComponent } from './result/result.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-container',
  imports: [
    RouterOutlet,
    HomeComponent,
    FormComponent,
    ResultComponent
  ],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {
  componentDisplayed = 'HOME';

  constructor(private router: Router){}

  ngOnInit(): void {

  }

  backToHome(){
    const page = this.componentDisplayed
    this.componentDisplayed = 'HOME'
  }


}
