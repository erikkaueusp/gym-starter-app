import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AlunoService } from "../../service/aluno.service";
import { Aluno } from "../aluno";

@Component({
  selector: 'edicao-aluno',
  templateUrl: 'edicao-aluno.component.html',
})
export class EdicaoAlunoComponent implements OnInit {


  public aluno: Aluno;
  isEdicao = true;

  constructor(
    public dialogRef: MatDialogRef<EdicaoAlunoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Aluno,
    private alunoService: AlunoService,
  ) { }


  ngOnInit(): void {
    this.alunoService.find(this.data).subscribe({
      next: (aluno) => {
        this.aluno = aluno[0];
      },
      error: (error) => this.dialogRef.close(error),
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
