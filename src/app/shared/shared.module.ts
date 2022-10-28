import { NgModule } from '@angular/core';

import { MaterialsModule } from './materials/materials.module';
import { DialogWarningComponent } from './shared/dialog/dialog-warning.component';
import { PhotoUploadComponent } from './shared/photo-upload/photo-upload.component';



@NgModule({
  declarations: [
    PhotoUploadComponent,
    DialogWarningComponent,
  ],
  imports: [
    MaterialsModule
  ],
  exports: [PhotoUploadComponent]
})
export class SharedModule { }
