import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormData, Result } from '../model/data-type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://127.0.0.1:8000/predict/';

  constructor(
    private http: HttpClient
  ) { }

  postData(form: FormData): Observable<Result> {
    return this.http.post<Result>(this.apiUrl, form);
  }
}
