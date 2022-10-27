import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { MaterialsModule } from 'src/app/shared/materials/materials.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AlunoComponent } from './aluno.component';
import { CadastroAlunoComponent } from './crud-aluno/cadastro-aluno/cadastro-aluno.component';
import { ConsultaAlunoComponent } from './crud-aluno/consulta-aluno/consulta-aluno.component';



@NgModule({
  declarations: [AlunoComponent, CadastroAlunoComponent, ConsultaAlunoComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialsModule,
    NgxMaskModule.forChild(),
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class AlunoModule { }
