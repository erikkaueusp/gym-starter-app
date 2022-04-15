import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AlunoService } from '../../service/aluno.service';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent implements OnInit {

  form: FormGroup;

  formData = new FormData();

  constructor(private formBuilder: FormBuilder, private alunoService: AlunoService) { }

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
    console.log("Salvo com sucesso!");
    console.log(form.value);
    console.log(this.formData.get);
    // this.alunoService.save(form, this.formData);
  }



  getFrontPhoto(item:File) {
    console.log("recebido huahuah")
    this.formData.append('foto',item)
    console.log(this.formData);
  }

}
