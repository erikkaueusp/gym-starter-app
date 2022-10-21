import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { AlunoService } from '../../service/aluno.service';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-consulta-aluno',
  templateUrl: './consulta-aluno.component.html',
  styleUrls: ['./consulta-aluno.component.css']
})
export class ConsultaAlunoComponent implements OnInit {
  panelOpenState = false;

  alunos: Aluno[] = [];

  @Input() photoPath = '../../../../../assets/img/nouser.jpg';

  form: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder,
    private alunoService: AlunoService) { }

  ngOnInit(): void {
    this.createForm()
    this.consulta()
  }

  consulta() {
    this.alunoService.find(this.form.value).subscribe({
      next: (response) => {
        this.alunos = response;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  private createForm() {
    this.form = this.formBuilder.group({
      nome: ['']
    })
  }


}
