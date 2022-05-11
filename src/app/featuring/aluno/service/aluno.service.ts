import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';




const URL: string = 'http://localhost:8080/form'


@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private http: HttpClient) { }


  // {headers:{'Content-Type':'multipart/form-data'}}
  save(formData): Observable<Response> {
    return this.http.post<Response>(URL, formData);
  }


}


