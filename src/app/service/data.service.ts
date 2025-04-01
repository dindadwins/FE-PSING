import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FinalOutput, FormData, ServiceResponse } from '../model/data-type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://localhost:8082/fe-psing';

  constructor(
    private http: HttpClient
  ) { }

  postData(form: FormData): Observable<ServiceResponse<FinalOutput>> {
    return this.http.post<ServiceResponse<FinalOutput>>(this.apiUrl, form);
  }
}
