import { Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { HomeComponent } from './container/home/home.component';
import { FormComponent } from './container/form/form.component';
import { ResultComponent } from './container/result/result.component';

export const routes: Routes = [
  {
    path: 'savings-prediction',
    component: ContainerComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'form', component: FormComponent},
      {path: 'result', component: ResultComponent}
    ]
  },
  {
    path: '',
    redirectTo: '/savings-prediction/home',
    pathMatch: 'full',
  }
];
