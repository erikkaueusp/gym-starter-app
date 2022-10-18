import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  file: File;

  formData = new FormData();

  @Input() photoPath = '../../../../../assets/img/nouser.jpg';

  constructor(private formBuilder: FormBuilder,
    private alunoService: AlunoService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.createForm();


  }

  private createForm() {
    this.form = this.formBuilder.group({
      file: [''],
      nome: ['', Validators.required],
      email: ['', Validators.email],
      endereco: [''],
      tel: ['']
    })
  }

  save(form) {
    this.formData.append('foto', this.file)
    this.formData.append('form', JSON.stringify(form.value))
    console.log("Salvo com sucesso!");
    this.alunoService.save(this.formData).subscribe({
      next: () => {
        this.openSnackBar("Salvo com sucesso!", "OK");
        this.cleanForm();
      },
      error: err => this.openSnackBar(`Deu ruim :( => ${err})`, "OK")
    });


  }
  cleanForm() {
    this.formData.delete('form');
    this.formData.delete('foto');
    this.form.reset();
    this.photoPath = '../../../../../assets/img/nouser-copy.jpg'; // gambiarra pra ajudar a restar a imagem.
  }


  onChange(target: any) {
    if (target instanceof EventTarget) {
      let element = target as HTMLInputElement;
      let files = element.files
      if (files) {
        this.file = files[0]
        const reader = new FileReader();
        reader.onload = (event: any) => this.photoPath = event.target.result;
        reader.readAsDataURL(files[0]);
      }
    }
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

}
