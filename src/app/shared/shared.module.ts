import { NgModule } from '@angular/core';

import { MaterialsModule } from './materials/materials.module';
import { PhotoUploadComponent } from './shared/photo-upload/photo-upload.component';
import { SnackBarMaterialsComponent } from './shared/snack-bar-materials/snack-bar-materials.component';



@NgModule({
  declarations: [
    PhotoUploadComponent,
    SnackBarMaterialsComponent
  ],
  imports: [
    MaterialsModule
  ],
  exports: [PhotoUploadComponent,SnackBarMaterialsComponent]
})
export class SharedModule { }
