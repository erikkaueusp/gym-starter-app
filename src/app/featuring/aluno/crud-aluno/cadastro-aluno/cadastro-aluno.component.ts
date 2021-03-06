import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';

import { AlunoService } from '../../service/aluno.service';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent implements OnInit {

  form: FormGroup;

  formData = new FormData();

  photoPath = '../../../../../assets/img/nouser.jpg';

  nomeBehaviorSubjectPai= new BehaviorSubject<boolean>(false);

  constructor(private formBuilder: FormBuilder,
             private alunoService: AlunoService,
             private snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.createForm();


  }

  private createForm() {
  this.form = this.formBuilder.group({
    nome: [''],
    email: [''],
    endereco: [''],
    tel: ['']
    })
  }

  save(form) {

    // let formModel = Object.assign({},form,FormAluno)

    // console.log(formModel)

    // this.formData.append('form',new Blob([JSON.stringify(form.value)],{type: "application/json"}));
    this.formData.append('form',JSON.stringify(form.value))
    console.log("Salvo com sucesso!");
    this.alunoService.save(this.formData).subscribe({
      next: () => {
        this.openSnackBar("Salvo com sucesso!","OK");
        this.cleanForm();
      },
      error: err => this.openSnackBar(`Deu ruim :( => ${err})`,"OK")
    });


  }
  cleanForm() {
    this.formData.delete('form');
    this.formData.delete('foto');
    this.form.reset();
    this.photoPath = '../../../../../assets/img/nouser-copy.jpg'; // gambiarra pra ajudar a restar a imagem.
  }



  getFrontPhoto(item:File) {
    this.formData.append('foto',item)
    console.log(this.formData);
  }

  openSnackBar(message, action) {
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: ['mat-toolbar', 'mat-accent']
    });;
  }

}
