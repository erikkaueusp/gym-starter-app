import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialsModule } from '../shared/materials/materials.module';
import { MenuComponent } from './menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    RouterModule
  ],
  exports: [MenuComponent]
})
export class MenuModule { }
