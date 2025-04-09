import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from '../../model/data-type';

@Component({
  selector: 'app-result',
  imports: [],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})

export class ResultComponent{
  result: Result = {
    predicted_class: '',
    compability: '',
    top_3_recommendations: []
  };

  constructor(private router: Router){
    const output: any = router.getCurrentNavigation()?.extras?.state;
    this.result = output;
  }

  backToHome(){
    this.router.navigate(['savings-prediction/home'])
  }
}
