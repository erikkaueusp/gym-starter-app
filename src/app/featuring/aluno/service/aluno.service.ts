import { FormAluno } from './../crud-aluno/aluno';
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

  save(form): Observable<Response> {
    return this.http.post<Response>(URL, this.buildAluno(form));
  }

  update(form): Observable<Response> {
    return this.http.put<Response>(URL, this.buildAluno(form));
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

  private buildAluno(form: any) {
    const aluno = new FormAluno();
    aluno.id = form.value.id;
    aluno.nome = form.value.nome;
    aluno.email = form.value.email;
    aluno.telefone = form.value.telefone;
    aluno.endereco = form.value.endereco;
    aluno.base = form.value.base;
    return aluno;
  }


}


