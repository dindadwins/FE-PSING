import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  imports: [],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})

export class ResultComponent{
  constructor(private router: Router){}

  backToHome(){
    this.router.navigate(['savings-prediction/home'])
  }
}