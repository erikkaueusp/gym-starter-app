import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlunoService } from '../../service/aluno.service';

@Component({
  selector: 'app-consulta-aluno',
  templateUrl: './consulta-aluno.component.html',
  styleUrls: ['./consulta-aluno.component.css']
})
export class ConsultaAlunoComponent implements OnInit {
  panelOpenState = false;

  list = [1, 1, 1, 1, 1, 1];

  @Input() photoPath = '../../../../../assets/img/nouser.jpg';

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private alunoService: AlunoService) { }

  ngOnInit(): void {
  }

  private createForm() {
    this.form = this.formBuilder.group({
      nome: ['']
    })
  }

}
