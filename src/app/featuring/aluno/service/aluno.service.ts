import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from '../crud-aluno/aluno';




const URL: string = 'http://localhost:8080/aluno'


@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private http: HttpClient) { }


  // {headers:{'Content-Type':'multipart/form-data'}}
  save(formData): Observable<Response> {
    return this.http.post<Response>(URL, formData);
  }

  update(formData): Observable<Response> {
    return this.http.put<Response>(URL, formData);
  }

  find(formValue): Observable<Aluno[]> {
    let param = new URLSearchParams();
    if (formValue.nome) {
      param.append('nome', formValue.nome);
    }
    return this.http.get<Aluno[]>(`${URL}?${param.toString()}`);
  }

  excluir(nome: string): Observable<Response> {
    let param = new URLSearchParams();
    if (nome) {
      param.append('nome', nome);
    }
    return this.http.delete<Response>(`${URL}?${param.toString()}`);
  }

  getDefaultImage(): Observable<Blob> {
    return this.http.get('../../../assets/img/nouser.jpg', { responseType: 'blob' });
  }


}


