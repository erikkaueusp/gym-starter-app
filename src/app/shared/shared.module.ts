import { NgModule } from '@angular/core';

import { MaterialsModule } from './materials/materials.module';
import { DialogEditComponent } from './shared/dialog/dialog-edit.component';
import { DialogWarningComponent } from './shared/dialog/dialog-warning.component';
import { PhotoUploadComponent } from './shared/photo-upload/photo-upload.component';



@NgModule({
  declarations: [
    PhotoUploadComponent,
    DialogWarningComponent,
    DialogEditComponent
  ],
  imports: [
    MaterialsModule
  ],
  exports: [PhotoUploadComponent]
})
export class SharedModule { }
