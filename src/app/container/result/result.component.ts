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
    compatibility: '',
    top_3_recommendations: []
  };
  position: number = 0;
  predicted_product: string ='';

  constructor(private router: Router){
    const output: any = router.getCurrentNavigation()?.extras?.state;
    this.result = output;
    this.position = 0;
    this.predicted_product = this.result.top_3_recommendations[0].class_name;
  }

  backToHome(){
    this.router.navigate(['savings-prediction/home'])
  }

  onClickPrevious(){
    switch(this.position){
      case 1:
        this.position = 0;
        this.predicted_product = this.result.top_3_recommendations[0].class_name;
        break;
      case 2:
        this.position = 1;
        this.predicted_product = this.result.top_3_recommendations[1].class_name;
        break;
      default:
        break;
    }
  }

  onClictNext(){
    switch(this.position){
      case 0:
        this.position = 1;
        this.predicted_product = this.result.top_3_recommendations[1].class_name;
        break;
      case 1:
        this.position = 2;
        this.predicted_product = this.result.top_3_recommendations[2].class_name;
        break;
      default:
        break;
    }
  }
}
