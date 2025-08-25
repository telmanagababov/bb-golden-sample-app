import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { RadioButtonModule } from '@backbase/ui-ang/radio-button';
import { IconModule } from '@backbase/ui-ang/icon';
import { HeadingModule } from '@backbase/ui-ang/heading';

@NgModule({
  imports: [
    CommonModule,
    RadioButtonModule,
    IconModule,
    HeadingModule
  ],
  declarations: [FileUploadComponent],
  exports: [FileUploadComponent],
})
export class FileUploadModule {}