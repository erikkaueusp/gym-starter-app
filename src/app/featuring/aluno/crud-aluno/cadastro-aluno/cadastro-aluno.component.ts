import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';

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

  formData = new FormData();

  @Input() photoPath = '../../../../../assets/img/nouser.jpg';

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
      tel: ['', Validators.required],
      base: ['']
    })
  }

  private updateAluno(aluno: Aluno) {
    const formValue = new Object();
    formValue['id'] = aluno.id;
    formValue['nome'] = aluno.nome;
    formValue['email'] = aluno.email;
    formValue['endereco'] = aluno.endereco;
    formValue['tel'] = aluno.telefone;
    formValue['base'] = aluno.base;
    this.form.patchValue(formValue)
    this.photoPath = `data:image/jpg;base64, ${aluno.base}`
  }

  private updatePhoto(form) {
    if (!this.editImage) {
      const blob = this.dataURItoBlob(form.value.base);
      const imgFile = new File([blob], `${form.value.id}.png`, { type: 'image/jpeg' });
      this.formData.append('foto', imgFile);
    } else {
      this.formData.append('foto', this.file);
    }
  }

  getDefaultImage() {
    this.alunoService.getDefaultImage().subscribe({
      next: (blob) => {
        this.file = new File([blob], "foto");
      }
    });
  }


  save(form) {
    this.formData.append('form', JSON.stringify(form.value))
    if (!this.edicao) {
      this.formData.append('foto', this.file)
      this.alunoService.save(this.formData).subscribe({
        next: () => {
          this.openSnackBar("Salvo com sucesso!", "OK");
          this.cleanForm();
        },
        error: err => {
          this.openSnackBar(`Deu ruim :( => ${err.error.message})`, "OK")
          this.cleanForm();
        }
      });

    } else {
      this.updatePhoto(form);
      this.alunoService.update(this.formData).subscribe({
        next: () => {
          this.openSnackBar("Atualizado com sucesso!", "OK");
          this.volta()
        }
      });
    }

  }
  cleanForm() {
    this.formData.delete('form');
    this.formData.delete('foto');
    this.form.reset();
    this.getDefaultImage();
    this.photoPath = '../../../../../assets/img/nouser-copy.jpg'; // gambiarra pra ajudar a restar a imagem.
  }


  onChange(target: any) {
    this.editImage = this.edicao;
    if (target instanceof EventTarget) {
      let element = target as HTMLInputElement;
      let files = element.files
      if (files) {
        this.file = files[0]
        const reader = new FileReader();
        reader.onload = (event: any) => { this.photoPath = event.target.result; console.log(reader.result); }; // TODO é possivel enviar diretamente o base64 aqui, fazer um refactoring
        reader.readAsDataURL(files[0]);

      }
    }
  }

  volta(): void {
    this.cancelaEvent.emit();
  }



  // getFrontPhoto(item: File) {
  //   this.formData.append('foto', item)
  // }

  openSnackBar(message, action) {
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: ['mat-toolbar', 'mat-accent']
    });;
  }

  dataURItoBlob(dataURI) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'image/png' });
    return blob;
  }

}
