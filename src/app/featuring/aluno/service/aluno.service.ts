import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';




const URL: string = 'http://localhost/local'


@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private http: HttpClient) { }



  save(formValue, photo): Observable<Response> {
    return this.http.post<Response>(URL, this.buildJson(formValue, photo));
  }


  private buildJson(formValue, photo) {
    const aluno = Object.assign({},formValue)
    aluno.photo = photo;
    return aluno;
  }




}


