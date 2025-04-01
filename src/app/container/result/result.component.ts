import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FinalOutput } from '../../model/data-type';

@Component({
  selector: 'app-result',
  imports: [],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})

export class ResultComponent{
  result: FinalOutput = {
    percentage: '',
    savings_product: ''
  };

  constructor(private router: Router){
    const output: any = router.getCurrentNavigation()?.extras?.state;
    this.result = output;
  }

  backToHome(){
    this.router.navigate(['savings-prediction/home'])
  }
}
