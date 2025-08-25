import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonModule } from '@backbase/ui-ang/radio-button';
import { IconModule } from '@backbase/ui-ang/icon';
import { HeadingModule } from '@backbase/ui-ang/heading';

@Component({
  selector: 'bb-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  standalone: false,
})
export class FileUploadComponent {
  selectedWireType: 'domestic' | 'international' = 'domestic';

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      console.log('Selected file:', input.files[0].name);
      // Implement file upload logic here
    }
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
      console.log('Dropped file:', event.dataTransfer.files[0].name);
      // Implement file upload logic here
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }
}