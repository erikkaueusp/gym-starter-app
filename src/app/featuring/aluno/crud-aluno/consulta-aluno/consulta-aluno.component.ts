import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { faTrashCan, faUserPen } from '@fortawesome/free-solid-svg-icons';
import { DialogWarningComponent } from 'src/app/shared/shared/dialog/dialog-warning.component';
import { AlunoService } from '../../service/aluno.service';
import { Aluno } from '../aluno';
import { EdicaoAlunoComponent } from '../edicao-aluno/edicao-aluno.component';

@Component({
  selector: 'app-consulta-aluno',
  templateUrl: './consulta-aluno.component.html',
  styleUrls: ['./consulta-aluno.component.css']
})
export class ConsultaAlunoComponent implements OnInit {
  icon = faTrashCan;
  faUserPen = faUserPen;
  isDisabled = false;

  alunos: Aluno[] = [];

  @Input() photoPath = '../../../../../assets/img/nouser.jpg';

  form: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder,
    private alunoService: AlunoService,
    public dialog: MatDialog) { }

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

  openDialog(nome): void {
    this.isDisabled = true;
    const dialogRef = this.dialog.open(DialogWarningComponent, {
      width: '20%',
      data: { nome: nome },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isDisabled = false;
      if (result) {
        this.alunoService.excluir(nome).subscribe();
        this.alunos = [];
      }
    });
  }


  openDialoEdit(nome): void {
    this.isDisabled = true;
    const dialogRef = this.dialog.open(EdicaoAlunoComponent, {
      width: '20%',
      data: { nome: nome },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isDisabled = false;
      this.consulta();
    });
  }

}
