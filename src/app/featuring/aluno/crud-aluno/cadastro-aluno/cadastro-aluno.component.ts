import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { dataToBase64 } from 'src/app/shared/shared/util-file';

import { AlunoService } from '../../service/aluno.service';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent implements OnInit, OnChanges {

  form: UntypedFormGroup;

  file: File;

  titulo: string;

  @Input() aluno: Aluno;

  @Input() edicao = false;

  editImage = false;

  @Output() cancelaEvent = new EventEmitter();

  constructor(private formBuilder: UntypedFormBuilder,
    private alunoService: AlunoService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.titulo = "Cadastro";
    this.createForm();
    if (!this.edicao) {
      this.getDefaultImage();
    }
  }

  ngOnChanges() {
    if (this.aluno) {
      this.titulo = "Editar"
      this.updateAluno(this.aluno);
    }
  }

  private createForm() {
    this.form = this.formBuilder.group({
      id: [],
      nome: ['', Validators.required],
      email: ['', Validators.email],
      endereco: [''],
      telefone: ['', Validators.required],
      base: ['']
    })
  }

  private updateAluno(aluno: Aluno) {
    const formValue = new Object();
    formValue['id'] = aluno.id;
    formValue['nome'] = aluno.nome;
    formValue['email'] = aluno.email;
    formValue['endereco'] = aluno.endereco;
    formValue['telefone'] = aluno.telefone;
    formValue['base'] = aluno.base;
    this.form.patchValue(formValue)
  }

  getDefaultImage() {
    this.alunoService.getDefaultImage().subscribe({
      next: (blob) => {
        this.file = new File([blob], "foto");
        dataToBase64(this.file).then((base64) => this.form.get('base').setValue(`${base64}`));
      }
    });
  }


  save() {
    if (!this.edicao) {
      this.alunoService.save(this.form).subscribe({
        next: () => {
          this.feedbackSuccess();
          this.cleanForm();
        },
        error: err => {
          this.feedbackFail(err.error.message);
          console.log(err.error.message);
          this.cleanForm();
        }
      });

    } else {
      this.alunoService.update(this.form).subscribe({
        next: () => {
          this.feedbackUpdate();
          this.volta()
        }
      });
    }

  }

  cleanForm() {
    this.form.reset();
    this.getDefaultImage();
  }

  onChange(target: any) {
    this.editImage = this.edicao;
    if (target instanceof EventTarget) {
      let element = target as HTMLInputElement;
      let files = element.files
      if (files) {
        this.file = files[0];
        dataToBase64(this.file).then((base64) => this.form.get('base').setValue(`${base64}`));
      }
    }
  }

  volta(): void {
    this.cancelaEvent.emit();
  }

  feedbackSuccess() {
    this.openSnackBar("Salvo com sucesso!", "OK", 5000, 'mat-accent');
  }

  feedbackUpdate() {
    this.openSnackBar("Atualizado com sucesso!", "OK", 5000, 'mat-primary');
  }

  feedbackFail(erro: string) {
    this.openSnackBar(`Deu ruim! =>  ${erro}) `, "OK", 0, 'mat-warn')
  }

  openSnackBar(message, action, time: number, color) {
    this.snackBar.open(message, action, {
      duration: time,
      panelClass: ['mat-toolbar', color]
    });
  }
}
