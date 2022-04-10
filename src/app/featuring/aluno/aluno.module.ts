import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from 'src/app/shared/materials/materials.module';
import { AlunoComponent } from './aluno.component';
import { CadastroAlunoComponent } from './crud-aluno/cadastro-aluno/cadastro-aluno.component';
import { ConsultaAlunoComponent } from './crud-aluno/consulta-aluno/consulta-aluno.component';
import { EditaAlunoComponent } from './crud-aluno/edita-aluno/edita-aluno.component';
import { ExcluiAlunoComponent } from './crud-aluno/exclui-aluno/exclui-aluno.component';



@NgModule({
  declarations: [AlunoComponent, CadastroAlunoComponent, ConsultaAlunoComponent, EditaAlunoComponent, ExcluiAlunoComponent],
  imports: [
    CommonModule,
    MaterialsModule
  ]
})
export class AlunoModule { }
