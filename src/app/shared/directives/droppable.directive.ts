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
  onDragOver(event: any) {
    event.preventDefault();
    event.stopPropagation();

    this.fileOver = true;
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(event: any) {
    event.preventDefault();
    event.stopPropagation();

    this.fileOver = false;
  }

  @HostListener('drop', ['$event'])
  onDrop(event: any) {
    event.preventDefault();
    event.stopPropagation();

    this.fileOver = false;
    const files = event.dataTransfer.files;

    if (files.length > 0) {
      this.fileDropped.emit(files);
    }
  }
}
