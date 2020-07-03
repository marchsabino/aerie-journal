import {
  Directive,
  HostListener,
  HostBinding,
  Output,
  EventEmitter,
} from '@angular/core';

@Directive({
  selector: '[appDroppable]',
})
export class DroppableDirective {
  @HostBinding('class.fileover')
  fileOver: boolean;

  @Output() fileDropped: EventEmitter<FileList> = new EventEmitter();

  constructor() {}

  @HostListener('dragover', ['$event'])
  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();

    this.fileOver = true;

    console.log('Drag Over');
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();

    this.fileOver = false;

    console.log('Drag Leave');
  }

  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();

    this.fileOver = false;
    const files = event.dataTransfer.files;

    if (files.length > 0) {
      this.fileDropped.emit(files);
      console.log(`You dropped ${files.length} files.`);
    }
  }
}
