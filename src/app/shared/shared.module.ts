import { NgModule } from '@angular/core';

import { MaterialsModule } from './materials/materials.module';
import { PhotoUploadComponent } from './shared/photo-upload/photo-upload.component';



@NgModule({
  declarations: [
    PhotoUploadComponent
  ],
  imports: [
    MaterialsModule
  ],
  exports: [PhotoUploadComponent]
})
export class SharedModule { }
